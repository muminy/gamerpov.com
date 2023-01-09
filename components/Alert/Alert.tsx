import React, { useImperativeHandle, forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import { AlertParamsType } from "."
import style from "./style.module.css"
import Icon from "../Icon"
import useToggle from "@/hooks/useToggle"

const Alert = forwardRef((props, ref) => {
  const { toggle, setValue, value: isShowAlert } = useToggle(false)
  const alertData = useRef<AlertParamsType>()

  useImperativeHandle(ref, () => ({
    show: (params: AlertParamsType) => {
      alertData.current = params
      setValue(true)
      setTimeout(toggle, 2500)
    },
    hide: () => setValue(false),
  }))

  if (isShowAlert) {
    return (
      <div className={style.container}>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <div className={style.content}>
            <Icon icon={alertData.current?.icon ?? "info"} />
            <div className={style.message}>{alertData.current?.message}</div>
          </div>
        </motion.div>
      </div>
    )
  } else {
    return null
  }
})

export default Alert
