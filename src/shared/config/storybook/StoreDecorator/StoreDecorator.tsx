import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line ed-product-plugin/publick-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line ed-product-plugin/publick-api-imports
import { loginReducer } from '@/features/AuthByUsername/modal/slice/loginSlice';
import { articleDetailsReducer } from '@/entities/Article';
// eslint-disable-next-line ed-product-plugin/publick-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/modal/slice/addCommentFormSlice';
// eslint-disable-next-line ed-product-plugin/publick-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/modal/slices';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
