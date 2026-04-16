"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  contactStepSchema,
  type ContactStepValues,
} from "@/lib/formSchema";
import type { FormState } from "@/types/form";

const inputClass =
  "mt-1.5 h-11 min-h-[44px] text-base sm:text-sm";

type Props = {
  form: FormState;
  isSubmitting: boolean;
  onSubmit: (data: ContactStepValues) => void;
};

export function StepFinal_Kontakt({
  form,
  isSubmitting,
  onSubmit,
}: Props) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formTitleId = useId();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactStepValues>({
    resolver: zodResolver(contactStepSchema),
    defaultValues: {
      name: form.name,
      telefon: form.telefon,
      email: form.email,
      plz: form.plz,
      ort: form.ort,
      strasse: form.strasse,
      datenschutz: false,
    },
  });

  const datenschutz = useWatch({ control, name: "datenschutz", defaultValue: false });

  useEffect(() => {
    reset({
      name: form.name,
      telefon: form.telefon,
      email: form.email,
      plz: form.plz,
      ort: form.ort,
      strasse: form.strasse,
      datenschutz: false,
    });
  }, [form.name, form.telefon, form.email, form.plz, form.ort, form.strasse, reset]);

  const nameField = register("name");

  useEffect(() => {
    const t = window.setTimeout(() => nameInputRef.current?.focus(), 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
      aria-describedby={formTitleId}
    >
      <div className="space-y-1" id={formTitleId}>
        <p className="text-sm font-medium text-navy-900">
          Fast geschafft – wie erreichen wir Sie?
        </p>
        <p className="text-xs text-slate-500">
          Wir melden uns in der Regel innerhalb eines Werktags – oft telefonisch
          für einen kurzen Abstimmungstermin. Pflichtfelder sind gekennzeichnet.
        </p>
      </div>
      <div className="space-y-3">
        <div>
          <Label htmlFor="lead-name">
            Vor- und Nachname <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lead-name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={errors.name ? "true" : "false"}
            aria-required
            {...nameField}
            ref={(el) => {
              nameField.ref(el);
              nameInputRef.current = el;
            }}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="lead-phone">
            Telefon <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lead-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
            aria-invalid={errors.telefon ? "true" : "false"}
            aria-required
            {...register("telefon")}
          />
          {errors.telefon && (
            <p className="mt-1 text-xs text-destructive" role="alert">
              {errors.telefon.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="lead-email">
            E-Mail <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lead-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={inputClass}
            aria-invalid={errors.email ? "true" : "false"}
            aria-required
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="lead-plz">
              PLZ <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lead-plz"
              autoComplete="postal-code"
              inputMode="numeric"
              className={inputClass}
              aria-invalid={errors.plz ? "true" : "false"}
              aria-required
              {...register("plz")}
            />
            {errors.plz && (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.plz.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="lead-ort">
              Ort <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lead-ort"
              autoComplete="address-level2"
              className={inputClass}
              aria-invalid={errors.ort ? "true" : "false"}
              aria-required
              {...register("ort")}
            />
            {errors.ort && (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.ort.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="lead-strasse">
            Straße und Hausnummer <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lead-strasse"
            autoComplete="street-address"
            className={inputClass}
            aria-invalid={errors.strasse ? "true" : "false"}
            aria-required
            {...register("strasse")}
          />
          {errors.strasse && (
            <p className="mt-1 text-xs text-destructive" role="alert">
              {errors.strasse.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/80 p-3">
        <Checkbox
          id="lead-dsgvo"
          checked={datenschutz}
          onCheckedChange={(c) =>
            setValue("datenschutz", c === true, { shouldValidate: true })
          }
          aria-invalid={errors.datenschutz ? "true" : "false"}
          aria-required
          className="mt-0.5 shrink-0 border-slate-300 data-checked:border-gold-500 data-checked:bg-gold-500"
        />
        <label
          htmlFor="lead-dsgvo"
          className="block min-w-0 flex-1 cursor-pointer text-left text-xs font-normal leading-relaxed text-slate-600"
        >
          Ich habe die{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-gold-600 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
          <span className="text-destructive">*</span>
        </label>
      </div>
      {errors.datenschutz && (
        <p className="text-xs text-destructive" role="alert">
          {errors.datenschutz.message}
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={isSubmitting}
        className="h-12 w-full gap-2 text-base font-semibold shadow-none disabled:opacity-70"
        aria-label="Anfrage absenden"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Wird gesendet…
          </>
        ) : (
          <>Anfrage absenden →</>
        )}
      </Button>
    </form>
  );
}
