import Image from "next/image"
import Router from "next/router"
import { useEffect, useState } from "react"
import { FormEvent } from "react"

import { api } from "../../../lib/axios/axios"

import Profile from "../../../assets/image/profile.png"

import {
  ContainerPreviewBets,
  TitlePreviewBets,
  PeopleBetting,
  ContainerImage,
  DescriptionPreview,
  ValuePreview,
  ContainerTop,
  ContainerDescription,
} from "../../../styles/pages/home/previewBets/style"

export default function PreviewBets() {
  useEffect(() => {
    api.get("/bets").then((response) => {
      const betsData = response.data

      setBets(betsData)
    })
  }, [])

  const [bets, setBets] = useState([])

  function SelectBets(event: FormEvent) {
    Router.push("/bets")
  }

  return (
    <>
      {bets.map((preview: ItemsBets) => {
        return (
          <ContainerPreviewBets onClick={SelectBets} key={preview.id}>
            <ContainerTop>
              <TitlePreviewBets>
                <h1>{preview.title}</h1>
              </TitlePreviewBets>
              <ValuePreview>
                <h2>R$ {preview.value}</h2>
              </ValuePreview>
            </ContainerTop>
            <ContainerDescription>
              <div>
                <Image src={Profile} alt="previa de perfil" width={30} />
              </div>
              <DescriptionPreview>
                <p>{preview.description}</p>
              </DescriptionPreview>
            </ContainerDescription>
            <PeopleBetting>
              <ContainerImage>
                <div>
                  <Image src={Profile} alt="previa de perfil" width={15} />
                </div>
                <div>
                  <Image src={Profile} alt="previa de perfil" width={15} />
                </div>
                <div>
                  <Image src={Profile} alt="previa de perfil" width={15} />
                </div>
              </ContainerImage>
            </PeopleBetting>
          </ContainerPreviewBets>
        )
      })}
    </>
  )
}
