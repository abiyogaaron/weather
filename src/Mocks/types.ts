import {
  DefaultBodyType,
  PathParams,
  ResponseResolver,
  RestContext,
  RestRequest,
} from 'msw';

export type TResponseResolver<R = DefaultBodyType, P = PathParams> = ResponseResolver<
RestRequest<DefaultBodyType, P extends PathParams ? P : PathParams>,
RestContext,
R extends DefaultBodyType ? R : DefaultBodyType
>;
