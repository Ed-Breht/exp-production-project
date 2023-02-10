import { LoginSchema } from '@/features/AuthByUsername';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(addCommentFormReducer(
            state as LoginSchema,
            addCommentFormActions.setText('Test Text'),
        )).toEqual({ text: 'Test Text' });
    });
});
