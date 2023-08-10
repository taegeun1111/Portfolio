import React, {useRef} from 'react';

const FeedbackForm = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Feedback</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default FeedbackForm;