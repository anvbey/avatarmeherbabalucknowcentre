import { z } from "zod";

const individualFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    age: z.coerce.number().int().positive(),
    gender: z.string(),
    email: z.string().email(),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    address: z.string().min(1, "Address is required"),
});

const memberFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    gender: z.string(),
    age: z.coerce.number().int().positive(),
});


const groupFormSchema = z.object({
    leaderName: z.string().min(1, "Name is required"),
    email: z.string().email(),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    address: z.string().min(1, "Address is required"),
    age: z.coerce.number().int().positive(),
    gender: z.string(),
    numberOfMembers: z.coerce.number().int().positive(),
    members: z.array(memberFormSchema),
});

export { individualFormSchema, groupFormSchema, memberFormSchema };