"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/form/StepIndicator";
import { Step01_Interesse } from "@/components/form/steps/Step01_Interesse";
import { Step02_PV_Options } from "@/components/form/steps/Step02_PV_Options";
import { Step02_WP_Heizung } from "@/components/form/steps/Step02_WP_Heizung";
import { Step03_WP_Alter } from "@/components/form/steps/Step03_WP_Alter";
import { Step04_WP_Gebaeude } from "@/components/form/steps/Step04_WP_Gebaeude";
import { Step05_WP_Eigentuemer } from "@/components/form/steps/Step05_WP_Eigentuemer";
import { Step06_WP_Ort } from "@/components/form/steps/Step06_WP_Ort";
import { Step07_WP_Zeitraum } from "@/components/form/steps/Step07_WP_Zeitraum";
import { Step08_WP_PVInteresse } from "@/components/form/steps/Step08_WP_PVInteresse";
import { StepFinal_Kontakt } from "@/components/form/steps/StepFinal_Kontakt";
import { getProgressLabel, getStepQuestionTitle } from "@/lib/formSteps";
import type { ContactStepValues } from "@/lib/formSchema";
import type { FormState, InterestType } from "@/types/form";
import { initialFormState } from "@/types/form";

function canProceed(step: number, form: FormState): boolean {
  if (step === 0) return form.interest !== null;
  if (form.interest === "photovoltaik") {
    if (step === 1) return true;
    return true;
  }
  if (form.interest === "waermepumpe") {
    switch (step) {
      case 1:
        return form.wp_heizung !== null;
      case 2:
        return form.wp_alter !== null;
      case 3:
        return form.wp_gebaeudetyp !== null;
      case 4:
        return form.wp_eigentuemer !== null;
      case 5:
        return form.wp_installationsort !== null;
      case 6:
        return form.wp_zeitraum !== null;
      case 7:
        return true;
      default:
        return true;
    }
  }
  return false;
}

const stepMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.2, ease: "easeOut" },
} as const;

export function LeadForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const isPv = form.interest === "photovoltaik";
  const isWp = form.interest === "waermepumpe";

  const totalSteps = useMemo(() => {
    if (!form.interest) return 1;
    if (isPv) return 3;
    if (isWp) return 9;
    return 1;
  }, [form.interest, isPv, isWp]);

  const progress = useMemo(() => {
    if (!form.interest) return 0.06;
    return (step + 1) / totalSteps;
  }, [form.interest, step, totalSteps]);

  const stepLabel = useMemo(
    () => getProgressLabel(step, totalSteps, form.interest),
    [step, totalSteps, form.interest],
  );

  const srStepTitle = useMemo(
    () => getStepQuestionTitle(step, form.interest),
    [step, form.interest],
  );

  const updateForm = useCallback((patch: Partial<FormState>) => {
    setForm((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleNext = useCallback(() => {
    if (!canProceed(step, form)) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }, [step, form, totalSteps]);

  const handleBack = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);

  /** Nach Einzelauswahl automatisch einen Schritt weiter (weniger Klicks). */
  const selectInterestAndGo = useCallback((value: InterestType) => {
    setForm((prev) => ({ ...prev, interest: value }));
    setStep(1);
  }, []);

  const selectWpAndGo = useCallback((patch: Partial<FormState>) => {
    setForm((prev) => ({ ...prev, ...patch }));
    setStep((s) => Math.min(s + 1, 8));
  }, []);

  const handleContactSubmit = useCallback(
    async (data: ContactStepValues) => {
      setSubmitting(true);
      setForm((prev) => ({
        ...prev,
        name: data.name,
        telefon: data.telefon,
        email: data.email,
        plz: data.plz,
        ort: data.ort,
        strasse: data.strasse,
      }));
      await new Promise((r) => setTimeout(r, 500));
      router.push("/danke");
      setSubmitting(false);
    },
    [router],
  );

  const showNavButtons =
    form.interest &&
    !((isPv && step === 2) || (isWp && step === 8));

  const nextDisabled = !canProceed(step, form);

  const renderBody = () => {
    if (step === 0) {
      return (
        <Step01_Interesse form={form} onSelect={selectInterestAndGo} />
      );
    }
    if (isPv) {
      if (step === 1) {
        return <Step02_PV_Options form={form} onChange={updateForm} />;
      }
      if (step === 2) {
        return (
          <StepFinal_Kontakt
            form={form}
            isSubmitting={submitting}
            onSubmit={handleContactSubmit}
          />
        );
      }
    }
    if (isWp) {
      switch (step) {
        case 1:
          return (
            <Step02_WP_Heizung
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_heizung: v })}
            />
          );
        case 2:
          return (
            <Step03_WP_Alter
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_alter: v })}
            />
          );
        case 3:
          return (
            <Step04_WP_Gebaeude
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_gebaeudetyp: v })}
            />
          );
        case 4:
          return (
            <Step05_WP_Eigentuemer
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_eigentuemer: v })}
            />
          );
        case 5:
          return (
            <Step06_WP_Ort
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_installationsort: v })}
            />
          );
        case 6:
          return (
            <Step07_WP_Zeitraum
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_zeitraum: v })}
            />
          );
        case 7:
          return (
            <Step08_WP_PVInteresse
              form={form}
              onSelect={(v) => selectWpAndGo({ wp_pv_interesse: v })}
            />
          );
        case 8:
          return (
            <StepFinal_Kontakt
              form={form}
              isSubmitting={submitting}
              onSubmit={handleContactSubmit}
            />
          );
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Kostenlos
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Unverbindlich
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
          SSL-verschlüsselt
        </span>
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight text-navy-900 md:text-2xl">
          Ihre kostenlose Erstberatung
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          In etwa 2 Minuten – wir melden uns persönlich bei Ihnen.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          Kein Kaltakquise-Druck: Sie erhalten eine ehrliche Einschätzung, ob und
          wie wir Sie unterstützen können.
        </p>
      </div>

      <StepIndicator progress={progress} label={stepLabel} className="mb-4" />

      <p id="lead-form-step-status" className="sr-only" aria-live="polite">
        {stepLabel}. {srStepTitle}
      </p>

      <p className="mb-5 flex items-start gap-2 text-xs text-slate-500 sm:items-center">
        <Shield className="mt-0.5 size-3.5 shrink-0 text-gold-600 sm:mt-0" aria-hidden />
        <span>Daten nur für Ihre Anfrage, DSGVO-konform verarbeitet.</span>
      </p>

      <div
        className="min-h-[260px]"
        role="region"
        aria-labelledby="lead-form-step-status"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${step}-${form.interest ?? "none"}`}
            {...stepMotion}
            className="min-h-[240px]"
          >
            {renderBody()}
          </motion.div>
        </AnimatePresence>
      </div>

      {showNavButtons && (
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {(step > 0 && isWp && step < 8) || (step === 1 && isPv) ? (
            <p className="order-2 text-center text-[11px] leading-snug text-slate-400 sm:order-1 sm:max-w-[14rem] sm:text-left">
              {step > 0 && isWp && step < 8
                ? "Eine Auswahl reicht – der nächste Schritt öffnet sich automatisch."
                : "Mehrfachauswahl möglich, danach auf „Weiter“ tippen."}
            </p>
          ) : (
            <span className="order-2 hidden sm:order-1 sm:block sm:flex-1" aria-hidden />
          )}
          <div className="order-1 flex items-center justify-between gap-3 sm:order-2 sm:ml-auto">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={step === 0}
              className="h-11 min-w-[100px] gap-1 border-slate-200 px-4"
              aria-label="Zum vorherigen Schritt"
            >
              <ChevronLeft className="size-4" aria-hidden />
              Zurück
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              disabled={nextDisabled}
              title={
                nextDisabled
                  ? "Bitte treffen Sie zuerst eine Auswahl oder vervollständigen Sie die Angaben."
                  : undefined
              }
              className="h-11 min-w-[120px] gap-1 bg-navy-900 px-5 text-white hover:bg-navy-800 disabled:opacity-50"
              aria-label="Zum nächsten Schritt"
            >
              Weiter
              <ChevronRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
