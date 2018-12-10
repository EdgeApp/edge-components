// @flow

import { PasswordInput } from './components'
import { YesNoModal, createYesNoModal } from './YesNoModal/YesNoModal.js'
import { InputModal, createInputModal } from './InputModal/InputModal.js'
import { SecureTextModal, createSecureTextModal } from './SecureTextModal/SecureTextModal.js'
import { StaticModal, createStaticModal } from './StaticModal/StaticModal.js'
import { SimpleConfirmModal, createSimpleConfirmModal } from './SimpleConfirmModal/SimpleConfirmModal.js'
import { ModalManager, showModal } from './ModalManager.js'
import { styles as ModalStyle } from './ModalStyle.js'
import { Modal } from './Modal.js'
import { MaterialInputStyle, InputAndButtonStyle } from './components/styles.js'

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
