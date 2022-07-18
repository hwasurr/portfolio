import { useTheme } from '@emotion/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Site, StandingStyle } from '@my/common';
import {
  Badge,
  Box,
  Button,
  Form,
  FormErrorText,
  Heading,
  Text,
  TextArea,
  TextInput,
} from '@my/components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TagsQuery, useCreateGameMutation, useTagsQuery } from '../__generated__/graphql';
import { GameCreateFormDto } from './game/game.dto';
import TagList, { Tag } from './tag/TagList';

const resolver = classValidatorResolver(GameCreateFormDto);
export function GameCreateForm(): JSX.Element {
  const [selectedTags, setSelectedTags] = useState<TagsQuery['tags']>([]);
  const handleTagSelect = (newTag: TagsQuery['tags'][number]): void => {
    setSelectedTags((prev) => {
      if (prev.some((p) => p.id === newTag.id)) return prev;
      return prev.concat(newTag);
    });
  };
  const handleTagUnSelect = (targetTag: TagsQuery['tags'][number]): void => {
    setSelectedTags((prev) => {
      return prev.filter((p) => p.id !== targetTag.id);
    });
  };
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
          <Box>
            <TextInput
              size="sm"
              isError={!!errors.titleEmoji}
              {...register('titleEmoji')}
            />
            <FormErrorText isError={!!errors.titleEmoji}>
              {errors.titleEmoji?.message}
            </FormErrorText>
          </Box>

          <Text>게임이름</Text>
          <Box>
            <TextInput size="sm" isError={!!errors.title} {...register('title')} />
            <FormErrorText isError={!!errors.title}>
              {errors.title?.message}
            </FormErrorText>
          </Box>

          <Text>게임고유이름-영어</Text>
          <Box>
            <TextInput size="sm" isError={!!errors.gamename} {...register('gamename')} />
            <FormErrorText isError={!!errors.gamename}>
              {errors.gamename?.message}
            </FormErrorText>
          </Box>

          <Text>게임 간략 설명</Text>
          <Box>
            <TextArea isError={!!errors.summary} {...register('summary')} />
            <FormErrorText isError={!!errors.summary}>
              {errors.summary?.message}
            </FormErrorText>
          </Box>
        </Box>

        <Heading.H6 fontWeight="bold">게임 상세</Heading.H6>
        <Box
          display="grid"
          sx={{ gridTemplateColumns: '1fr 4fr', rowGap: theme.spacing[2] }}
        >
          <Text>게임 방법</Text>
          <Box>
            <TextArea
              isError={!!errors.information?.howToPlay}
              {...register('information.howToPlay')}
            />
            <FormErrorText isError={!!errors.information?.howToPlay}>
              {errors.information?.howToPlay?.message}
            </FormErrorText>
          </Box>

          <Text>게임을 통해 얻는 것</Text>
          <Box>
            <TextArea
              isError={!!errors.information?.benefit}
              {...register('information.benefit')}
            />
            <FormErrorText isError={!!errors.information?.benefit}>
              {errors.information?.benefit?.message}
            </FormErrorText>
          </Box>

          <Text>좌식/입식</Text>
          <Box>
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
            <FormErrorText isError={!!errors.information?.standingStyle}>
              {errors.information?.standingStyle?.message}
            </FormErrorText>
          </Box>

          <Text>실내/실외/둘다가능</Text>
          <Box>
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
            <FormErrorText isError={!!errors.information?.availableSite}>
              {errors.information?.availableSite?.message}
            </FormErrorText>
          </Box>

          <Text>최소인원</Text>
          <Box>
            <TextInput
              size="sm"
              type="number"
              sx={{ width: '55px' }}
              {...register('information.minNumberOfPeople', { valueAsNumber: true })}
            />
            <FormErrorText isError={!!errors.information?.minNumberOfPeople}>
              {errors.information?.minNumberOfPeople?.message}
            </FormErrorText>
          </Box>

          <Text>최대인원</Text>
          <Box>
            <TextInput
              size="sm"
              type="number"
              sx={{ width: '55px' }}
              {...register('information.maxNumberOfPeople', { valueAsNumber: true })}
            />
            <FormErrorText isError={!!errors.information?.maxNumberOfPeople}>
              {errors.information?.maxNumberOfPeople?.message}
            </FormErrorText>
          </Box>

          <Text>최소소요시간</Text>
          <Box>
            <TextInput
              size="sm"
              type="number"
              sx={{ width: '55px' }}
              {...register('information.minMinuteTaken', { valueAsNumber: true })}
            />
            <FormErrorText isError={!!errors.information?.minMinuteTaken}>
              {errors.information?.minMinuteTaken?.message}
            </FormErrorText>
          </Box>

          <Text>최대소요시간</Text>
          <Box>
            <TextInput
              size="sm"
              type="number"
              sx={{ width: '55px' }}
              {...register('information.maxMinuteTaken', { valueAsNumber: true })}
            />
            <FormErrorText isError={!!errors.information?.maxMinuteTaken}>
              {errors.information?.maxMinuteTaken?.message}
            </FormErrorText>
          </Box>

          <Text>게임 태그</Text>
          <Box>
            <Box.Flex gap={2}>
              <Text fontSize="sm">선택된 태그(태그 클릭시 선택취소): </Text>
              {selectedTags.map((tag) => (
                <Tag
                  key={tag.id}
                  tag={tag}
                  hideDescription
                  onClick={() => handleTagUnSelect(tag)}
                />
              ))}
            </Box.Flex>
            <Text fontWeight="bold">태그목록</Text>
            <TagList direction="row" hideDescription onSelect={handleTagSelect} />
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
