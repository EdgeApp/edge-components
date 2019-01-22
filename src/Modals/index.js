// @flow

import { PasswordInput } from './components'
import { InputAndButtonStyle, MaterialInputStyle } from './components/styles.js'
import { InputModal, createInputModal } from './InputModal/InputModal.js'
import { Modal } from './Modal.js'
import { ModalManager, showModal } from './ModalManager.js'
import { styles as ModalStyle } from './ModalStyle.js'
import { SecureTextModal, createSecureTextModal } from './SecureTextModal/SecureTextModal.js'
import { SimpleConfirmModal, createSimpleConfirmModal } from './SimpleConfirmModal/SimpleConfirmModal.js'
import { StaticModal, createStaticModal } from './StaticModal/StaticModal.js'
import { YesNoModal, createYesNoModal } from './YesNoModal/YesNoModal.js'

export {
  YesNoModal,
  createYesNoModal,
  InputModal,
  createInputModal,
  SecureTextModal,
  createSecureTextModal,
  PasswordInput,
  StaticModal,
  createStaticModal,
  SimpleConfirmModal,
  createSimpleConfirmModal,
  ModalManager,
  showModal,
  ModalStyle,
  Modal,
  MaterialInputStyle,
  InputAndButtonStyle
}
