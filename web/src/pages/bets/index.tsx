import { useEffect, useState } from "react"
import Image from "next/image"

import { HeaderBets } from "./headerBets"
import HeaderLogin from "../../components/navbar/navLogin"
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

export default function MyBets() {
  useEffect(() => {
    api.get("/bets").then((response) => {
      const betsData = response.data

      setBets(betsData)
    })
  }, [])

  const [bets, setBets] = useState([])

  return (
    <>
      <NavBar />
      <HeaderBets />
      <DivContainer>
        <MainBets>
          {bets.map((items: ItemsBets) => {
            return (
              <ContainerBets key={items.id}>
                <ContainerTop>
                  <TitleBets>
                    <h2>{items.title}</h2>
                  </TitleBets>
                  <ValueBets>
                    <h2>R$ {items.value}</h2>
                  </ValueBets>
                </ContainerTop>
                <BetMaker>
                  <div>
                    <Image src={Profile} alt="previa de perfil" width={50} />
                  </div>
                  <MainBet>
                    <p>{items.description}</p>
                  </MainBet>
                </BetMaker>
                <SubBets>
                  <Against>
                    <AgainstBet>
                      <p>Apostando contra</p>
                    </AgainstBet>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={30} />
                    </div>
                  </Against>
                  <ToAgree>
                    <ToAgreeBet>
                      <p>Apostando a favor</p>
                    </ToAgreeBet>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={30} />
                    </div>
                  </ToAgree>
                </SubBets>
                <DivBottom>
                  <PeopleBets>
                    <ContainerImage>
                      <div>
                        <Image
                          src={Profile}
                          alt="previa de perfil"
                          width={25}
                        />
                      </div>
                      <div>
                        <Image
                          src={Profile}
                          alt="previa de perfil"
                          width={25}
                        />
                      </div>
                      <div>
                        <Image
                          src={Profile}
                          alt="previa de perfil"
                          width={25}
                        />
                      </div>
                    </ContainerImage>
                  </PeopleBets>
                  <ContainerSelectBets>
                    <SelectAgainst>A favor</SelectAgainst>
                    <SelectToAgree>Contra</SelectToAgree>
                  </ContainerSelectBets>
                </DivBottom>
              </ContainerBets>
            )
          })}
        </MainBets>
      </DivContainer>
    </>
  )
}
