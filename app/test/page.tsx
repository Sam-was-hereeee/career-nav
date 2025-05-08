"use client";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DictionaryInput from "@components/RegisterInput/DictionaryInput"; // Adjust path as needed

const schema = z.object({
    dictionary: z
        .array(
            z.object({
                key: z.string().min(1, "請填入鍵"),
                value: z.string().min(1, "請填入值"),
            })
        )
        .min(1, "至少需要一組鍵值"),
});

type FormData = z.infer<typeof schema>;

export default function DictionaryTestPage() {
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            dictionary: [{ key: "", value: "" }],
        },
    });

    const onSubmit = (data: FormData) => {
        console.log("📦 Submitted:", data);
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">測試 DictionaryInput</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                    <DictionaryInput id="dictionary">自訂欄位</DictionaryInput>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-opacity-70 transition"
                    >
                        提交
                    </button>
                </form>
            </FormProvider>
        </main>
    );
}
