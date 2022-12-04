import Image from "next/image"
import { FormEvent, useEffect, useState } from "react"

import Profile from "../../../assets/image/profile.png"
import { api } from "../../../lib/axios/axios"

import {
  ContainerBets,
  ContainerInput,
  ContainerSearch,
  Header,
  InputSearch,
  PreviewBets,
} from "../../../styles/pages/bets/headerBets/style"

import {
  ContainerDescription,
  ContainerTop,
  DescriptionPreview,
  TitlePreviewBets,
  ValuePreview,
} from "../../../styles/pages/home/previewBets/style"

interface Bets {
  title: string
}

export default function HeaderBets() {
  useEffect(() => {
    api.get("/bets").then((response) => {
      const betsData = response.data

      setBets(betsData)
    })
  }, [])

  const [bets, setBets] = useState([])

  function ValueInput(event: FormEvent): void {
    const value: string = (event.target as HTMLInputElement).value

    setSearch(value)
  }

  const [value, setSearch]: any[] = useState(bets)

  const filterArray = bets.filter((betSearch: Bets) =>
    betSearch.title.includes(value)
  )

  return (
    <Header>
      <ContainerSearch>
        <ContainerInput>
          <InputSearch
            type="text"
            placeholder="procurar"
            onChange={ValueInput}
          />
        </ContainerInput>
      </ContainerSearch>
      <ContainerBets>
        {filterArray.map((preview: ItemsBets) => {
          return (
            <PreviewBets key={preview.id}>
              <ContainerTop>
                <TitlePreviewBets>
                  <h1>{preview.title}</h1>
                </TitlePreviewBets>
                <ValuePreview>
                  <h1>R$ {preview.value}</h1>
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
            </PreviewBets>
          )
        })}
      </ContainerBets>
    </Header>
  )
}
