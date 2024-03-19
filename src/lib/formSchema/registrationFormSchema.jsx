import { z } from "zod";

const groupFormSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    city: z.string().min(1, "Address is required"),
    age: z.coerce.number().min(1, "Age is required"),
    gender: z.string(),
    numberOfMembers: z.coerce.number().min(1, "At least one member is required"),
    members: z.array(z.object({
        firstName: z.string().min(1, "Name is required"),
        lastName: z.string().optional(),
        gender: z.string(),
        age: z.coerce.number().int().positive(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
    })),
});

export { groupFormSchema };