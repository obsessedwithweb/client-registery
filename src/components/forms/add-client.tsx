"use client";

// import * as React from "react"
import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Field, FieldError, FieldGroup, FieldLabel, FieldSeparator, FieldSet,} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Client, ClientSchema} from "@/schema/client.schema";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {toast} from "sonner";
import {PhoneInput} from "@/components/ui/phone-input";

export function AddClientForm() {
    const form = useForm<Client>({
        resolver: zodResolver(ClientSchema),
        defaultValues: {
            name: "",
            address: "Algeria",
            email: "",
            phone: "",
            facebook: "",
            telegram: "",
            instagram: "",
            whatsapp: "",
            image: "",
            gender: "MALE",
            type: "INDIVIDUAL",
        },
    });

    const onSubmit = async (data: Client) => {
        const body = JSON.stringify(data);
        const response = await fetch("http://localhost:3000/api/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        })
                toast("You submitted the following values:", {
                    description: (
                        <pre
                            className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4" >
                          <code >
                              {body}
                          </code >
                        </pre >
                    ),
                    position: "bottom-right",
                    classNames: {
                        content: "flex flex-col gap-2",
                    },
                    style: {
                        "--border-radius": "calc(var(--radius)  + 4px)",
                    } as React.CSSProperties,
                })
    };

    return (
        <Card className="w-full sm:max-w-md" >
            <CardHeader >
                <CardTitle >New Client</CardTitle >
                <CardDescription >Fill in client's information.</CardDescription >
            </CardHeader >
            <CardContent >
                <form id="add-client-form" onSubmit={form.handleSubmit(onSubmit)} >
                    <FieldGroup >
                        <FieldSet >
                            <Controller
                                name="name"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-name" >Client name</FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-name"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />

                            <Controller
                                name="email"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-email" >Email</FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-email"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            type="email"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />

                            <Controller
                                name="address"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-address" >Address</FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-address"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />

                            <Controller
                                name="phone"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-phone" >Phone</FieldLabel >
                                        <PhoneInput
                                            {...field}
                                            id="client-phone"
                                            placeholder={"Phone number"}
                                            defaultCountry={"DZ"}
                                            countries={["DZ"]}
                                            international={false}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className={"input-phone flex items-center"}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />
                        </FieldSet >
                        <FieldSeparator />
                        <FieldSet >
                            <Controller
                                name="whatsapp"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-whatsapp" >Whatsapp</FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-whatsapp"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            type="url"
                                            value={field.value ?? ""}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />
                            <Controller
                                name="telegram"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-telegram" >telegram</FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-telegram"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            type="url"
                                            value={field.value ?? ""}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />
                            <Controller
                                name="facebook"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-facebook" >Facebook</FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-facebook"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            type="url"
                                            value={field.value ?? ""}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />
                            <Controller
                                name="instagram"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <FieldLabel htmlFor="client-instagram" >
                                            Instagram
                                        </FieldLabel >
                                        <Input
                                            {...field}
                                            id="client-instagram"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            type="url"
                                            value={field.value ?? ""}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />

                            <Controller
                                name="gender"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <RadioGroup
                                            defaultValue="MALE"
                                            className={"flex gap-x-4 items-center justify-center"}
                                        >
                                            <div className="flex items-center space-x-2" >
                                                <RadioGroupItem value="MALE" id="MALE" />
                                                <Label htmlFor="MALE" >Male</Label >
                                            </div >
                                            <div className="flex items-center space-x-2" >
                                                <RadioGroupItem value="FEMALE" id="FEMALE" />
                                                <Label htmlFor="FEMALE" >Female</Label >
                                            </div >
                                        </RadioGroup >
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />

                            <Controller
                                name="type"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} >
                                        <RadioGroup
                                            defaultValue="INDIVIDUAL"
                                            className={"flex gap-x-4 items-center justify-center"}
                                        >
                                            <div className="flex items-center space-x-2" >
                                                <RadioGroupItem value="INDIVIDUAL" id="INDIVIDUAL" />
                                                <Label htmlFor="INDIVIDUAL" >Individual</Label >
                                            </div >
                                            <div className="flex items-center space-x-2" >
                                                <RadioGroupItem value="COMPANY" id="COMPANY" />
                                                <Label htmlFor="COMPANY" >Company</Label >
                                            </div >
                                        </RadioGroup >
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field >
                                )}
                            />
                        </FieldSet >
                    </FieldGroup >
                </form >
            </CardContent >
            <CardFooter >
                <Field orientation="horizontal" >
                    <Button type="button" variant="outline" onClick={() => form.reset()} >
                        Reset
                    </Button >
                    <Button type="submit" form="add-client-form" >
                        Submit
                    </Button >
                </Field >
            </CardFooter >
        </Card >
    );
}
