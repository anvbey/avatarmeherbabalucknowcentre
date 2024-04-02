import { sendMail } from "../utils/mail";
import { pool as pg } from "../database/pg";

const contactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    await sendMail("contactForm", {
      name,
      phone,
      message,
      date: new Date(),
      email,
      subject,
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const registrationForm = async (req, res) => {
  const { firstName, lastName, email, phone, city, age, gender, members } =
    req.body;
  await pg.query("BEGIN");
  const id = await pg.query(
    `INSERT INTO registrations (first_name, last_name, email, phone, city, age, gender) values ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
    [firstName, lastName, email, phone, city, age, gender]
  );
  const groupLeadId = id.rows[0].id;
  await pg.query(
    `INSERT INTO registrations (group_lead_id) values ($1) WHERE id = $2`,
    [groupLeadId, groupLeadId]
  );
  members.forEach(async (member) => {
    await pg.query(
      `INSERT INTO members (first_name, last_name, email, phone, city, age, gender, group_lead_id) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        member.firstName,
        member.lastName,
        member.email,
        member.phone,
        member.city,
        member.age,
        member.gender,
        groupLeadId,
      ]
    );
  });
  await pg.query("COMMIT");
};

export default {
  contactForm,
  registrationForm,
};
