// Какая имеется ошибка при построении комозиции "useLoadImage" ?

import { defineProps, onMounted, ref, watch } from "vue";

export function useLoadImage() {
  let loadingImage = ref(true);
  let showImage = ref(false);

  const props = defineProps({
    src: String,
  });

  const delayShowImage = () => {
    setTimeout(() => {
      showImage.value = true;
    }, 100);
  };

  const loadImage = (src) => {
    let img = new Image();
    img.onload = (e) => {
      loading.value = false;
      img.onload = undefined;
      img.src = undefined;
      img = undefined;
      delayShowImage();
    };
    img.src = src;
  };

  onMounted(() => {
    if (props.src) {
      loadImage(props.src);
    }
  });

  watch(
    () => props.src,
    (val) => {
      if (val) {
        loadingImage.value = true;
        loadImage(val);
      }
    },
  );

  return { loadingImage, showImage };
}
