import { z } from "zod";

const groupFormSchema = z.object({
    first_name: z.string().min(1, "First Name is required"),
    last_name: z.string().min(1, "Last Name is required"),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    city: z.string().min(1, "Address is required"),
    age: z.coerce.number().min(1, "Age is required"),
    gender: z.string(),
    dateOfArrival: z.date(),
    dateOfDeparture: z.date(),
    numberOfMembers: z.coerce.number().min(1, "At least one member is required"),
    members: z.array(z.object({
        first_name: z.string().min(1, "First Name is required"),
        last_name: z.string().min(1, "Last Name is required"),
        gender: z.string(),
        age: z.coerce.number().min(1, "Age is required"),
        phone: z.string().length(10, "Phone number must be 10 digits").optional(),
    }).optional()),
});

export { groupFormSchema };