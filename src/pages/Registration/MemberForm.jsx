import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useController } from "react-hook-form";

const MemberForm = ({ control, index, t }) => {
  const { field: firstNameField, fieldState: firstNameFieldState } =
    useController({
      name: `members[${index}].first_name`,
      control,
      rules: { required: "First Name is required" },
    });
  const { field: lastNameField, fieldState: lastNameFieldState } =
    useController({
      name: `members[${index}].last_name`,
      control,
      rules: { required: "Last Name is required" },
    });
  const { field: ageField, fieldState: ageFieldState } = useController({
    name: `members[${index}].age`,
    control,
    rules: { required: "Age is required" },
  });
  const { field: phoneField, fieldState: phoneFieldState } = useController({
    name: `members[${index}].phone`,
    control,
    rules: { required: false },
    defaultValue: "",
  });
  const { field: genderField, fieldState: genderFieldState } = useController({
    name: `members[${index}].gender`,
    control,
    rules: { required: true },
  });
  return (
    <Box sx={{ gap: "50px" }}>
      <Typography padding="5px">{`Member ${index + 2}`}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            label={t("first-name")}
            {...firstNameField}
            required
            fullWidth
          />
          <p error={firstNameFieldState.invalid} style={{ color: "red" }}>
            {firstNameFieldState.error?.message}
          </p>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={t("last-name")}
            {...lastNameField}
            required
            fullWidth
          />
          <p error={lastNameFieldState.invalid} style={{ color: "red" }}>
            {lastNameFieldState.error?.message}
          </p>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={t("age")}
            type="number"
            {...ageField}
            required
            fullWidth
          />
          <p error={ageFieldState.invalid} style={{ color: "red" }}>
            {ageFieldState.error?.message}
          </p>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={t("phone-member")}
            type="number"
            {...phoneField}
            fullWidth
          />
          <p error={phoneFieldState.invalid} style={{ color: "red" }}>
            {phoneFieldState.error?.message}
          </p>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="gender">{t("gender")} *</InputLabel>
            <Select {...genderField} required labelId="gender" label="Gender">
              <MenuItem value="Male">{t("male")}</MenuItem>
              <MenuItem value="Female">{t("female")}</MenuItem>
              <MenuItem value="Other">{t("others")}</MenuItem>
            </Select>
          </FormControl>
          <p error={genderFieldState.invalid} style={{ color: "red" }}>
            {genderFieldState.error?.message}
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemberForm;
