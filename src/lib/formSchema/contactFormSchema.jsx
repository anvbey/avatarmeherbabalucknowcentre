import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export default contactFormSchema;
