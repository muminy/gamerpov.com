import { CommentType, CreateCommentType } from "@/types/comment"
import cn from "classnames"
import { CommentProps } from "."
import Form from "../FormElement"
import Repeater from "../Repeater"
import Title from "../Title"
import CommentCard from "./Card"
import Button from "../Button"
import { createComment } from "@/services/comment"
import { useForm } from "react-hook-form"
import { emailPattern } from "@/constants/patterns"
import { showAlert } from "@/helpers/alert"
import { useState } from "react"
import NotFound from "../NotFound"

export type CommentFormType = Omit<CreateCommentType, "commentOn">

export default function Comment({
  className,
  items,
  postId,
}: CommentProps) {
  const [loading, setLoading] = useState(false)
  const { handleSubmit, register, reset } = useForm<CommentFormType>()

  const onCreateComment = ({
    author,
    authorEmail,
    content,
  }: CommentFormType) => {
    setLoading(true)
    createComment({
      author,
      authorEmail,
      content,
      commentOn: postId,
    })
      .then(() => {
        showAlert({
          message:
            "Your comment has been sent. It will be listed after approval.",
        })
        reset()
      })
      .catch(() => {
        showAlert({
          message: "Comment Could Not Be Posted",
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={cn(className)}>
      <form
        onSubmit={handleSubmit(onCreateComment)}
        className="space-y-2 mb-10 w-full"
      >
        <Title title="Comment" />
        <div className="flex space-x-2">
          <Form.Input
            {...register("author", { required: true })}
            className="mb-2"
            placeholder="Name"
          />
          <Form.Input
            {...register("authorEmail", {
              required: true,
              pattern: emailPattern,
            })}
            className="mb-2"
            placeholder="E-mail Address"
          />
        </div>
        <Form.TextArea
          {...register("content", { required: true })}
          rows={5}
          placeholder="great article..."
        />
        <Button.Gradient disabled={loading} className="mb-10">
          {loading ? "Sending..." : "Send"}
        </Button.Gradient>
      </form>
      <Title title="Comments" />
      <Repeater<CommentType>
        items={items}
        className="space-y-3"
        renderNotFound={
          <NotFound
            title="No Comments"
            description="Do the first to comment"
          />
        }
        renderItem={(item, index) => <CommentCard {...item} key={index} />}
      />
    </div>
  )
}
