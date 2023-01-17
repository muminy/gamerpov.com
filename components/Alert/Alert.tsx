import React, { useImperativeHandle, forwardRef, useRef, useState } from "react"
import { motion } from "framer-motion"
import { AlertParamsType } from "."
import style from "./style.module.css"
import Icon from "../Icon"

const Alert = forwardRef((props, ref) => {
  const [showAlert, setShowAlert] = useState(false)

  const alertData = useRef<AlertParamsType>()

  useImperativeHandle(ref, () => ({
    show: (params: AlertParamsType) => {
      alertData.current = params
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 2500)
    },
    hide: () => setShowAlert(false),
  }))

  if (showAlert) {
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

Alert.displayName = "Alert"
export default Alert
