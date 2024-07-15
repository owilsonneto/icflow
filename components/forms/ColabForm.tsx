"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
    PASSWORD = 'password',
}
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const ColabForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Ic-Flow</h1>
            <p className="text-dark-700">Organizando a bagunça.</p>
        </section>
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Usuário"
            placeholder="@fulanodetal"
            iconSrc="/icons/user.svg"
            iconAlt="usuário"
        />
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Senha"
            placeholder="Senha"
            iconSrc="/icons/password.svg"
            iconAlt="usuário"
        />
        <SubmitButton isLoading={isLoading}>
            Login
        </SubmitButton>
      </form>
    </Form>
  )
}

export default ColabForm