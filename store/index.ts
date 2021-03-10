import AlertStore from "./modules/alert-store";
import {formStore} from "./modules/form-store";
import {globalStore} from "./modules/global-store";
import {modalStore} from "./modules/modal-store";
export interface IStore {
  state: any
}

export {AlertStore,formStore,globalStore,modalStore}