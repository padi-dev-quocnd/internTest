import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Outlet } from "react-router-dom";

export function FormProviderWrapper({
  children,
  onSubmit = (data) => console.log(data),
  className = null,
}) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
