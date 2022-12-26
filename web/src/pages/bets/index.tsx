import { useContext, useEffect, useState } from "react"
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
  DivBottom,
  DivContainer,
  DivMain,
  DivSubs,
  H1HeaderBets,
  MainBet,
  MainBets,
  PeopleBets,
  SelectAgainst,
  SelectAgainstDisabled,
  SelectToAgree,
  SelectToAgreeDisabled,
  SubBets,
  TitleBets,
  ToAgree,
  ToAgreeBet,
  ValueBets,
} from "../../styles/pages/bets/style"
import { AuthContext } from "../../context/auth/authContext"

export interface BetsData {
  id: string
  title: string
  value: number
  description: string
}

export default function MyBets() {
  const auth = useContext(AuthContext)
  const [bets, setBets] = useState([])
  const [selectedBet, setSelectedBet] = useState<BetsData>()

  useEffect(() => {
    const fetchBets = async () => {
      const response = await api.get("/bets")
      const betsData = response.data

      setBets(betsData)
    }

    fetchBets()
  }, [])

  const selectBets = async (id: string) => {
    const response = await api.get<BetsData>(`/bets/selectedbet/${id}`)
    const data = response.data

    setSelectedBet(data)
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
                  <h1>{selectedBet?.title.toLocaleUpperCase()}</h1>
                </TitleBets>
                <ValueBets>
                  <h2>
                    {Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(selectedBet?.value)}
                  </h2>
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
                <PeopleBets>
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
                {auth.data === null ? (
                  <ContainerSelectBets>
                    <SelectAgainstDisabled disabled>
                      A favor
                    </SelectAgainstDisabled>
                    <SelectToAgreeDisabled disabled>
                      Contra
                    </SelectToAgreeDisabled>
                  </ContainerSelectBets>
                ) : (
                  <ContainerSelectBets>
                    <SelectAgainst>A favor</SelectAgainst>
                    <SelectToAgree>Contra</SelectToAgree>
                  </ContainerSelectBets>
                )}
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
