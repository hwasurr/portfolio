import { useTheme } from '@emotion/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Site, StandingStyle } from '@my/common';
import {
  Badge,
  Box,
  Button,
  Form,
  Heading,
  Text,
  TextArea,
  TextInput,
} from '@my/components';
import { useForm } from 'react-hook-form';
import { useCreateGameMutation, useTagsQuery } from '../__generated__/graphql';
import { GameCreateFormDto } from './game/game.dto';

const resolver = classValidatorResolver(GameCreateFormDto);
export function GameCreateForm(): JSX.Element {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameCreateFormDto>({
    resolver,
  });
  const [__, mutate] = useCreateGameMutation();
  const onSubmit = (formData: GameCreateFormDto): void => {
    console.log(formData);
    mutate({
      data: {
        ...formData,
        information: {
          ...formData.information,
          availableSite: formData.information.availableSite as any,
          standingStyle: formData.information.standingStyle as any,
        },
        images: [],
        tagIds: [],
      },
    }).catch((err) => {
      console.log(err);
    });
  };

  const [tagsQuery] = useTagsQuery();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box
        flexDir="column"
        display="flex"
        maxWidth="md"
        gap={2}
        marginY={4}
        padding={4}
        rounded="2xl"
        border="1px solid #ddd"
      >
        <Heading.H6>게임 생성</Heading.H6>
        <Heading.H6 fontWeight="bold">게임 메타정보</Heading.H6>
        <Box
          display="grid"
          sx={{ gridTemplateColumns: '1fr 4fr', rowGap: theme.spacing[2] }}
        >
          <Text>게임 대표 이모지</Text>
          <TextInput
            size="sm"
            isError={!!errors.titleEmoji}
            {...register('titleEmoji')}
          />
          <Text>게임이름</Text>
          <TextInput size="sm" isError={!!errors.title} {...register('title')} />
          <Text>게임고유이름-영어</Text>
          <TextInput size="sm" isError={!!errors.gamename} {...register('gamename')} />
          <Text>게임 간략 설명</Text>
          <TextArea {...register('summary')} />
        </Box>

        <Heading.H6 fontWeight="bold">게임 상세</Heading.H6>
        <Box
          display="grid"
          sx={{ gridTemplateColumns: '1fr 4fr', rowGap: theme.spacing[2] }}
        >
          <Text>게임 방법</Text>
          <TextArea
            isError={!!errors.information?.howToPlay}
            {...register('information.howToPlay')}
          />
          <Text>게임을 통해 얻는 것</Text>
          <TextArea
            isError={!!errors.information?.benefit}
            {...register('information.benefit')}
          />
          <Text>좌식/입식</Text>
          <Box.Flex gap={2}>
            <label htmlFor="standingStyle-STANDING">
              입식
              <input
                type="radio"
                value={StandingStyle.STANDING}
                defaultChecked
                id="standingStyle-STANDING"
                {...register('information.standingStyle')}
              />
            </label>
            <label htmlFor="standingStyle-SEDENTARY">
              좌식
              <input
                type="radio"
                value={StandingStyle.SEDENTARY}
                id="standingStyle-SEDENTARY"
                {...register('information.standingStyle')}
              />
            </label>
          </Box.Flex>

          <Text>실내/실외/둘다가능</Text>
          <Box.Flex gap={2}>
            <label htmlFor="availableSite-INDOOR">
              실내
              <input
                type="radio"
                value={Site.INDOOR}
                id="availableSite-INDOOR"
                defaultChecked
                {...register('information.availableSite')}
              />
            </label>
            <label htmlFor="availableSite-OUTDOOR">
              실외
              <input
                type="radio"
                value={Site.OUTDOOR}
                id="availableSite-OUTDOOR"
                {...register('information.availableSite')}
              />
            </label>
            <label htmlFor="availableSite-BOTH">
              상관없음
              <input
                type="radio"
                value={Site.BOTH}
                id="availableSite-BOTH"
                {...register('information.availableSite')}
              />
            </label>
          </Box.Flex>

          <Text>최소인원</Text>
          <TextInput
            size="sm"
            type="number"
            {...register('information.minNumberOfPeople', { valueAsNumber: true })}
          />

          <Text>최대인원</Text>
          <TextInput
            size="sm"
            type="number"
            {...register('information.maxNumberOfPeople', { valueAsNumber: true })}
          />

          <Text>최소소요시간</Text>
          <TextInput
            size="sm"
            type="number"
            {...register('information.minMinuteTaken', { valueAsNumber: true })}
          />

          <Text>최대소요시간</Text>
          <TextInput
            size="sm"
            type="number"
            {...register('information.maxMinuteTaken', { valueAsNumber: true })}
          />

          <Text>게임 태그</Text>
          {/* <TextInput
            size="sm"
            isError={!!errors.titleEmoji}
            {...register('titleEmoji')}
          /> */}
          <Box>
            {tagsQuery.data?.tags.map((tag) => (
              <Badge key={tag.id} color={tag.color}>
                #{tag.title}
              </Badge>
            ))}
          </Box>
        </Box>

        <Box textAlign="right">
          <Button type="submit" size="lg">
            <Text>제출</Text>
          </Button>
        </Box>
      </Box>
    </Form>
  );
}

export default GameCreateForm;
