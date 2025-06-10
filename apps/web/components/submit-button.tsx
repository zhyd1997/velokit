import type { FC } from "react";

import { useFormStatus } from "react-dom";

import { Button } from "@workspace/ui/components/button";

export type SubmitButtonProps = {
  pendingText: string;
  defaultText: string;
};

export const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const { defaultText, pendingText } = props;

  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full mt-4"
      aria-busy={pending}
    >
      {pending ? pendingText : defaultText}
    </Button>
  );
};
