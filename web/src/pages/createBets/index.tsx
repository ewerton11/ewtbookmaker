import Router from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../lib/axios/axios"
import NavBar from "../../components/navbar"

import {
  ButtomCreateBets,
  ContainerDescription,
  ContainerForm,
  ContainerTitle,
  ContainerValue,
  DivCreateBets,
  DivDescription,
  DivTitle,
  DivTop,
  DivValue,
  FormCreateBets,
  InputCreateDescription,
  InputCreateTitle,
  InputCreateValue,
  SpanDescription,
  SpanTitle,
  SpanValue,
} from "../../styles/pages/createBets/style"

interface BetsData {
  title: string
  value: string
  description: string
}

const schema = yup
  .object({
    title: yup.string().required("titulo obrigatorio"),
    value: yup.string().required("titulo obrigatorio"),
    description: yup.string().required("descriçao obrigatorio"),
  })
  .required()

export default function CreateBets() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BetsData>({
    resolver: yupResolver(schema),
  })

  async function onSubmit(betsData: BetsData) {
    try {
      await api.post("/bets", {
        title: betsData.title,
        value: betsData.value,
        description: betsData.description,
      })
      await alert("Aposta criada")
      await Router.push("/")
    } catch {
      alert("Error, tente novamente")
    }
  }

  return (
    <>
      <NavBar />
      <DivCreateBets>
        <ContainerForm>
          <FormCreateBets onSubmit={handleSubmit(onSubmit)}>
            <DivTop>
              <DivTitle>
                <ContainerTitle>
                  <InputCreateTitle
                    {...register("title")}
                    type="text"
                    minLength={2}
                    maxLength={20}
                    placeholder="Titulo"
                  />
                </ContainerTitle>
                {errors.title && <SpanTitle>{errors.title?.message}</SpanTitle>}
              </DivTitle>
              <DivValue>
                <ContainerValue>
                  <InputCreateValue
                    {...register("value")}
                    minLength={1}
                    maxLength={4}
                    placeholder="Valor $"
                  />
                </ContainerValue>
                {errors.value && <SpanValue>{errors.value?.message}</SpanValue>}
              </DivValue>
            </DivTop>
            <DivDescription>
              <ContainerDescription>
                <InputCreateDescription
                  {...register("description")}
                  type="text"
                  minLength={5}
                  maxLength={30}
                  placeholder="Descriçao"
                />
              </ContainerDescription>
              {errors.description && (
                <SpanDescription>{errors.description?.message}</SpanDescription>
              )}
            </DivDescription>
            <ButtomCreateBets type="submit">Criar</ButtomCreateBets>
          </FormCreateBets>
        </ContainerForm>
      </DivCreateBets>
    </>
  )
}
