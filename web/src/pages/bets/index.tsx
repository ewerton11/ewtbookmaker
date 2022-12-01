import { useEffect, useState } from "react"
import Image from "next/image"

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
      <DivContainer>
        <MainBets>
          {bets.map((items: ItemsBets) => {
            return (
              <ContainerBets key={items.id}>
                <ContainerTop>
                  <TitleBets>
                    <h1>{items.title}</h1>
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
                  {/* <Against>
                    <AgainstBet>
                      <p>Apostando contra</p>
                    </AgainstBet>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={30} />
                    </div>
                  </Against>
                  <ToAgree>
                    <div>
                      <Image src={Profile} alt="previa de perfil" width={30} />
                    </div>
                    <ToAgreeBet>
                      <p>Apostando a favor</p>
                    </ToAgreeBet>
                  </ToAgree> */}
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
                    <SelectAgainst>favor</SelectAgainst>
                    <SelectToAgree>contra</SelectToAgree>
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
