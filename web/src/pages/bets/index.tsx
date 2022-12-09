import { useEffect, useState } from "react"
import Image from "next/image"

import HeaderBets from "./headerBets"
import NavBar from "../../components/navbar"
import Profile from "../../assets/image/profile.png"
import { api } from "../../lib/axios/axios"

import {
  Against,
  AgainstBet,
  BetMaker,
  ContainerBets,
  ContainerImage,
  ContainerSelectBets,
  ContainerTop,
  Div,
  DivBottom,
  DivContainer,
  DivMain,
  DivSubs,
  H1HeaderBets,
  MainBet,
  MainBets,
  PeopleBets,
  SelectAgainst,
  SelectToAgree,
  SubBets,
  TitleBets,
  ToAgree,
  ToAgreeBet,
  ValueBets,
} from "../../styles/pages/bets/style"

export interface BetsData {
  id: string
  title: string
  value: string
  description: string
}

export default function MyBets() {
  const [bets, setBets] = useState([])

  useEffect(() => {
    api.get("/bets").then((response) => {
      const betsData = response.data

      setBets(betsData)
    })
  }, [])

  const [selectedBet, setSelectedBet] = useState<BetsData>()

  async function selectBets(id: string) {
    await api.get<BetsData>(`/bets/selectedbet/${id}`).then((response) => {
      const data = response.data

      setSelectedBet(data)
    })
  }

  return (
    <>
      <NavBar />
      <HeaderBets bets={bets} eventSelectBets={selectBets} />
      <DivContainer>
        <MainBets>
          {selectedBet?.id ? (
            <ContainerBets key={selectedBet?.id}>
              <ContainerTop>
                <TitleBets>
                  <h1>{selectedBet?.title}</h1>
                </TitleBets>
                <ValueBets>
                  <h2>R$ {selectedBet?.value}</h2>
                </ValueBets>
              </ContainerTop>
              <BetMaker>
                <DivMain>
                  <Image src={Profile} alt="previa de perfil" width={45} />
                  <p>@ewerTon</p>
                </DivMain>
                <MainBet>
                  <p>{selectedBet?.description}</p>
                </MainBet>
              </BetMaker>
              <SubBets>
                <Against>
                  <AgainstBet>
                    <p>Apostando contra</p>
                  </AgainstBet>
                  <DivSubs>
                    <Image src={Profile} alt="previa de perfil" width={30} />
                    <p>@ewtReis</p>
                  </DivSubs>
                </Against>
                <ToAgree>
                  <ToAgreeBet>
                    <p>Apostando a favor</p>
                  </ToAgreeBet>
                  <DivSubs>
                    <Image src={Profile} alt="previa de perfil" width={30} />
                    <p>@Reis</p>
                  </DivSubs>
                </ToAgree>
              </SubBets>
              <DivBottom>
                {/* <PeopleBets>
                  <ContainerImage>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={25} />
                    </div>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={25} />
                    </div>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={25} />
                    </div>
                  </ContainerImage>
                </PeopleBets>
                <ContainerSelectBets>
                  <SelectAgainst>A favor</SelectAgainst>
                  <SelectToAgree>Contra</SelectToAgree>
                </ContainerSelectBets> */}
              </DivBottom>
            </ContainerBets>
          ) : (
            <H1HeaderBets>Selecione uma aposta</H1HeaderBets>
          )}
        </MainBets>
      </DivContainer>
    </>
  )
}
