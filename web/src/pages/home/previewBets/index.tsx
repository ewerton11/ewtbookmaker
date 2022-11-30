import Image from "next/image"
import Router from "next/router"

import Profile from "../../../assets/image/profile.png"

import {
  ContainerPreviewBets,
  TitlePreviewBets,
  PeopleBetting,
  ContainerImage,
  DescriptionPreview,
} from "../../../styles/pages/home/previewBets/style"

export default function PreviewBets() {
  return (
    <ContainerPreviewBets onClick={() => Router.push("/bets")}>
      <TitlePreviewBets>
        <h1>Fodase</h1>
      </TitlePreviewBets>
      <DescriptionPreview>
        <p>descriçao aleatoria pra simular qualquer merdinha mesmo e fodase</p>
      </DescriptionPreview>
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
}
