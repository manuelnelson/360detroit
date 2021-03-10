import {reactive,computed} from '@nuxtjs/composition-api'
import { IStore } from '..';
import { modalStore } from './modal-store';

class GlobalStore implements IStore{
  state = reactive({
    disableShortcuts: false,
    shouldUseLocalStorage: false,
    menuIsOpen: false,
    isLoading: false,
  })

  isDisabled = computed(() => {
    return this.state.disableShortcuts || modalStore.anyActive.value;
  })
}

const globalStore = new GlobalStore();

export {globalStore};