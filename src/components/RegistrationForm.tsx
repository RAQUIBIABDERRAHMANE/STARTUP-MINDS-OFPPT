"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitRegistration } from "../app/actions";

const formSchema = z.object({
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    email: z.string().email("Invalid email address"),
    classe: z.string().min(1, "Please select a class"),
});

type FormValues = z.infer<typeof formSchema>;

const CLASSES = [
    "DEV101", "DEV102", "DEV103", "DEV104", "DEV105", "DEV106", "DEV107", "DEV108", "DEV109", "DEV110",
    "ID101", "ID102", "ID103", "ID104", "ID105", "ID106", "ID107", "ID108", "ID109",
    "WFS201", "WFS202", "WFS203", "WFS204", "WFS205", "WFS206", "WFS207", "WFS208",
    "IDoSR201", "IDoSR202", "IDoSR203", "IDoSR204", "IDoSR205",
    "IDoCC", "IDoCS"
];

export default function RegistrationForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(data: FormValues) {
        setStatus("loading");
        setErrorMessage("");
        try {
            const result = await submitRegistration(data);
            if (result.success) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection.");
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />

                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        <motion.div
                            key="success"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="py-12 text-center space-y-4"
                        >
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                            <h3 className="text-2xl font-bold">Registration Complete!</h3>
                            <p className="text-zinc-400">We've received your info. See you at STARTUP MINDS!</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-6 px-6 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors"
                            >
                                Submit another
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
                                    <input
                                        {...register("fullName")}
                                        autoComplete="name"
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden",
                                            errors.fullName && "border-red-500 ring-red-500/20 ring-2"
                                        )}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
                                    <input
                                        {...register("phone")}
                                        autoComplete="tel"
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden",
                                            errors.phone && "border-red-500 ring-red-500/20 ring-2"
                                        )}
                                        placeholder="+212 600 000 000"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
                                    <input
                                        {...register("email")}
                                        autoComplete="email"
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden",
                                            errors.email && "border-red-500 ring-red-500/20 ring-2"
                                        )}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Class</label>
                                    <select
                                        {...register("classe")}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden appearance-none",
                                            errors.classe && "border-red-500 ring-red-500/20 ring-2"
                                        )}
                                    >
                                        <option value="" className="bg-zinc-950">Select your class</option>
                                        {CLASSES.map((cls) => (
                                            <option key={cls} value={cls} className="bg-zinc-950">
                                                {cls}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.classe && <p className="text-red-500 text-xs mt-1">{errors.classe.message}</p>}
                                </div>
                            </div>

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-500 text-sm"
                                >
                                    <AlertCircle className="w-4 h-4" />
                                    {errorMessage}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Join the Event
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
