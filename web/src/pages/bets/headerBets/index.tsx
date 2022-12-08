import Image from "next/image"
import { FormEvent, useState } from "react"
import { BetsData } from ".."

import Profile from "../../../assets/image/profile.png"

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

interface HeaderBetsProps {
  eventSelectBets: (preview: string) => void
  bets: BetsData[]
}

export default function HeaderBets({ eventSelectBets, bets }: HeaderBetsProps) {
  const [value, setSearch] = useState<string>("")

  function ValueInput(event: FormEvent) {
    const value: string = (event.target as HTMLInputElement).value

    setSearch(value)
  }

  const filterArray = (bets || []).filter((betSearch: Bets) =>
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
        {filterArray.map((preview) => {
          return (
            <PreviewBets
              key={preview.id}
              onClick={() => eventSelectBets(preview.id)}
            >
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
