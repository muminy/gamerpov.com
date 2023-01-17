import { CommentType, CreateCommentType } from "@/types/comment"
import cn from "classnames"
import { CommentProps } from "."
import Form from "../FormElement"
import Repeater from "../Repeater"
import Title from "../Title"
import CommentCard from "./Card"
import Button from "../Button"
import { createComment } from "@/libs/comment"
import { useForm } from "react-hook-form"
import { emailPattern } from "@/constants/patterns"
import { showAlert } from "@/helpers/alert"
import { useState } from "react"

export type CommentFormType = Omit<CreateCommentType, "commentOn">

export default function Comment({ className, items, postId }: CommentProps) {
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
        showAlert({ message: "Yorumunuz Onay'a gönderildi" })
        reset()
      })
      .catch(() => {
        showAlert({
          message: "Yorumunuz gönderilirken hata oluştu",
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
        <div className="second-text text-sm mb-2">Create a comment</div>
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
            placeholder="Email Adresiniz"
          />
        </div>
        <Form.TextArea
          {...register("content", { required: true })}
          placeholder="Yorum yapmak ister misin?"
        />
        <Button.Gradient disabled={loading} className="mb-10">
          {loading ? "Gönderiliyor.." : "Gönder"}
        </Button.Gradient>
      </form>
      <Title title="Yorumlar" icon="pen" />
      <Repeater<CommentType>
        items={items}
        className="space-y-3"
        renderItem={(item, index) => <CommentCard {...item} key={index} />}
      />
    </div>
  )
}
