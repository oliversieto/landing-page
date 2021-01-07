import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({ title, questions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(
            ({ question, answer, isExtraQuestion }, index) =>
              !isExtraQuestion && (
                <S.Question key={index}>
                  <Heading lineBottom>{question}</Heading>
                  <div dangerouslySetInnerHTML={{ __html: answer }} />
                </S.Question>
              )
          )}
        </S.Questions>

        {questions.map(
          ({ question, answer, isExtraQuestion }, index) =>
            isExtraQuestion && (
              <S.ExtraQuestion key={index}>
                <Heading lineBottom>{question}</Heading>
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              </S.ExtraQuestion>
            )
        )}
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
