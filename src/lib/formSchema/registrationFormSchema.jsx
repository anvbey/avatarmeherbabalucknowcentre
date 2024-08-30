import { z } from "zod";
import { useTranslation } from 'react-i18next';

function useGroupFormSchema() {
  const { t } = useTranslation("ZodSchema");

  const groupFormSchema = z.object({
    first_name: z.string().min(1, t('first_name_required')),
    last_name: z.string().min(1, t('last_name_required')),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().length(10, t('phone_invalid')),
    city: z.string().min(1, t("city_required")),
    age: z.coerce.number().min(1, t("age_required")),
    gender: z.string(),
    dateOfArrival: z.date(),
    dateOfDeparture: z.date(),
    numberOfMembers: z.coerce.number().min(1, t("members_required")),
    members: z.array(
      z.object({
        first_name: z.string().min(1, t('first_name_required')),
        last_name: z.string().min(1, t('last_name_required')),
        gender: z.string(),
        age: z.coerce.number().min(1, t("age_required")),
        phone: z
          .string()
          .length(10, t('phone_invalid'))
          .optional()
          .or(z.literal("")),
      })
    ),
  });

  return groupFormSchema;
}

export { useGroupFormSchema };
