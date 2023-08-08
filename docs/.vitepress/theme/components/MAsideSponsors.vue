<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme';

const data = [
  {
    items: [
      {
        name: '我的github',
        url: 'https://github.com/1071125093',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQAAAACoxAthAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZcwAAFxEAABcRAcom8z8AAAKLSURBVHja7Zs7jsIwEIYHUaTMEXKUHC0cjaNwBJcpImY9L8eGBUFJ/I+ElrX9ufo1T0P8tREQIECAfIxsFLYkopnv8pVv8jnzRf4Z7+XIDORoiAlho0X+rCe+Dkwkn3xLRpd8y+xiAQJkU0HR6IjvCTLlLzfT2JzlJ0tAgFTI7pRMY2cWx8QMBMhLja26x7fQGBAgT0iJYnlvtdwmnJLau8AH5MeRsCVJ/qKYCSbfIonv2zwZSG/Ig+Wkl8PTkCPNASBAvH4WjZUqiXxLvskt6ph2jQHpFtncMQmWj8uRQPLyxOqU8lHdAgKENVxZFNPj4pBqp6SW2igGpGfEqiRZP5UodhvcIb3yY0AOgYR38f6sIeJZrKlSYSsBAeL7nHwKlKskb6rI8cWbKtq6BQKkVEl6fJRExfKYabXm3MReVp+aHAZI14h6Hm+4WB9GEfdXmr88agxIt0iV8IrGBnurUN0Und7rwECOhliyIq22S6hi3Zc1WlnSS5WHAdIvYmPBRbXmVZL3+TUXPitybUISkJ4Rz2FG1tijDw/iaVMgeTm1VRKQnpHowpmpmKwL1zql2S4HAiSiGJUpot2Ul2T8/C7wAfltxKY8EpJK057LS5VLJL2JgAApGpMqycaCbEmvIZu9tU4uPWYgQDTpjc5J6cIpqk7JG3S0F09A+kYqS1QGQ2Q//9mHjPTU5wfSJ1I9npTD9uCgjJ4nb8+kthIH0jNiAtvKa9soqydbLhpjBnJARN1IIMrHlEc0ZCHJIxUQIM+/FnQvw5bDqFW3AQESGiMtq32PG31ZajMDAbJHsV1f+hYuurljvkU+tVMC0jESJoiW1ZHwbj5gDJ39nycD+WHkWwMCBAiQD+0PzniV+HADXHIAAAAASUVORK5CYII=',
      },
    ],
  },
];
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 90px;
}
</style>
