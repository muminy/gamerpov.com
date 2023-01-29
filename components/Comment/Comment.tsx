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
        showAlert({ message: "Your comment has been sent to Approval" })
        reset()
      })
      .catch(() => {
        showAlert({
          message: "An error occurred while submitting your comment.",
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
        className="space-y-2 mb-10"
      >
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          what do you think about this article
        </div>
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
          placeholder="Your E-mail Address"
        />
        <Form.TextArea
          {...register("content", { required: true })}
          placeholder="Do you want to comment?"
        />
        <Button.Gradient disabled={loading} className="mb-10">
          {loading ? "Sending..." : "Send"}
        </Button.Gradient>
      </form>
      <Title title="Comments" icon="comment" />
      <Repeater<CommentType>
        items={items}
        className="space-y-3"
        renderNotFound={<NotFound title="Not any comment" />}
        renderItem={(item, index) => <CommentCard {...item} key={index} />}
      />
    </div>
  )
}
