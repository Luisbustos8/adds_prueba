import React from 'react';
import useForm from '../../../hooks/useForm';
import { Button, Textarea } from '../../shared';

const MAX_CHARACTERS = 280;

const NewTweetForm = ({ onSubmit }) => {
  const [tweet, handleChange, handleSubmit] = useForm({ content: '' });
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const afterPreventDefault = ev => {
    console.log(ev);
    onSubmit(tweet);
  };

  const { content } = tweet;
  const handle = handleSubmit(afterPreventDefault);

  const characters = React.useMemo(
    () => `${content.length} / ${MAX_CHARACTERS}`,
    [content]
  );

  return (
    <form onSubmit={handle}>
      <Textarea
        className="newTweetPage-textarea"
        name="content"
        placeholder="Hey! What's up!"
        maxLength={MAX_CHARACTERS}
        value={content}
        onChange={handleChange}
        ref={textareaRef}
      />
      <div className="newTweetPage-footer">
        <span className="newTweetPage-characters">{characters}</span>
        <Button
          type="submit"
          className="newTweetPage-submit"
          variant="primary"
          disabled={!content}
        >
          Let's go!
        </Button>
      </div>
    </form>
  );
};

export default NewTweetForm;
