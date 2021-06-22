<template>
  <div class="w-full h-screen container mx-auto">
    <div class="flex justify-center items-center">
      <div class="w-1/2 h-24">
        <div class="brdr bg-gray-700 text-white text-center">
          Border
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.brdr {
  width: 50%;
  height: 24px;
}
.brdr:before {
  content: '';
  position: absolute;
  left,top: -2px;
  width,height: 12px;
  background-color: transparent;
  border: 12px solid red;
}

.brdr:hover:before {
  animation: animate 1s linear forwards;
}

@keyframes animate {
  0% {
    width,height: 0;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  25% {
    width,height: 0;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  50% {
    width,height: 0;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  100% {
    width,height: 0;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: #fff;
  }
}
</style>
