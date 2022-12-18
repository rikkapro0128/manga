<template>
  <div class="w-full grid grid-cols-[800px_1fr]">
    <div>
      <!-- THIS IS BREADCRUMB -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/manga' }">Manga</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="my-6">
        <!-- THIS IS NAME MANGA -->
        <h2 class="capitalize text-lg text-center">võ luyện đông phong</h2>
        <!-- THIS IS TIME UPDATE MANGA -->
        <p class="capitalize text-xs text-center text-slate-400">[Cập nhật lúc: 12:35 22/10/2022]</p>
      </div>
      <div class="grid grid-cols-[220px_1fr] box-border">
        <!-- THIS IS IMAGE MANGA -->
        <div class="overflow-hidden p-2">
          <img class="object-cover w-full shadow-sm shadow-slate-500 rounded-sm"
            src="https://st.ntcdntempv3.com/data/comics/32/vo-luyen-dinh-phong.jpg" alt="[võ luyện đông phong]">
          <div class="flex flex-col mt-4 box-border items-end">
            <el-button class="w-full" type="primary">
              <ArrowPathIcon class="w-5 h-5 mr-2" />
              Đọc từ đầu
            </el-button>
            <el-divider class="text-xs">
              hoặc
            </el-divider>
            <el-button class="w-full" type="primary">
              <SparklesIcon class="w-5 h-5 mr-2" />
              Đọc mới nhất
            </el-button>
          </div>
        </div>
        <!-- THIS IS INFORMATION MANGA -->
        <div class="pl-8 -my-2 text-sm">
          <!-- THIS IS INFORMATION MANGA -->
          <div :key="field" v-for="(info, field) in infoManga">
            <!-- $ -->
            <div v-if="field in snipetType" class="grid grid-cols-[minmax(110px,_1fr)_6fr] py-2">
              <div class="flex flex-nowrap items-center">
                <component class="w-5 h-5 text-slate-500" :is="field in snipetType ? snipetType[field].icon : ''">
                </component>
                <h4 class="font-bold whitespace-nowrap ml-2 text-slate-500">{{ field in snipetType ?
                    snipetType[field].vnsub : ''
                }}
                </h4>
              </div>
              <div class="flex flex-wrap pl-5 -m-2" v-if="field === 'genres'">
                <p class="hover:text-indigo-600 whitespace-nowrap p-2 cursor-pointer" :key="genres"
                  v-for="genres in info">{{ genres }}
                </p>
              </div>
              <div class="flex flex-wrap pl-5 -m-2" v-else-if="field === 'rate'">
                <el-rate v-model="rate" show-score allow-half text-color="#ff9900"
                  :score-template="`{value}/5 - ${infoManga.totalRate} lượt đánh giá`" />
              </div>
              <p class="flex-1 ml-5 " v-else>{{ info !== null ? info : 'N/A' }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- THIS IS DESCRIPTION MANGA -->
      <div class="pt-2">
        <el-divider class="inline-block border-t-2 border-indigo-600" content-position="left">
          <div class="my-4 flex flex-nowrap items-center text-indigo-600">
            <ChatBubbleBottomCenterTextIcon class="w-5 h-5" />
            <h4 class="ml-2 font-bold">Nội dung</h4>
          </div>
        </el-divider>
        <p ref="expand" :style="{ lineClamp: expandStatus.isExpand ? 'unset' : '4' }" class="text-sm line-clamp-4">{{
            demoDesc
        }}</p>
        <div class="py-2 mt-2 text-right" v-if="expandStatus.shouldExpand">
          <el-button @click="expandStatus.isExpand = !expandStatus.isExpand" type="primary">
            <ArrowsPointingOutIcon class="w-4 h-4 mr-2" />
            {{ expandStatus.isExpand ? 'Thu gọn' : 'Xem thêm' }}
          </el-button>
        </div>
      </div>
      <!-- THIS IS LIST CHAPTER MANGA -->
      <div class="pb-3">
        <el-divider class="inline-block border-t-2 border-indigo-600" content-position="left">
          <div class="my-4 flex flex-nowrap items-center text-indigo-600">
            <QueueListIcon class="w-5 h-5" />
            <h4 class="ml-2 font-bold">Danh sách chapter</h4>
          </div>
        </el-divider>
        <el-table-v2 :columns="columnsChapter" :data="datasChapter" :width="800" fixed
          :height="(datasChapter.length * 50) + 50" :max-height="500">
          <template #row="props">
            <Row v-bind="props" />
          </template>
        </el-table-v2>
      </div>
      <!-- THIS IS DISCUSSION MANGA -->
      <div>
        <el-divider class="inline-block border-t-2 border-indigo-600" content-position="left">
          <div class="my-4 flex flex-nowrap items-center text-indigo-600">
            <ChatBubbleLeftEllipsisIcon class="w-5 h-5" />
            <el-badge type="primary"
              :value="activeComment === 'system' ? renderNumberComnents(totalComments.system) : renderNumberComnents(totalComments.facebook)">
              <h4 class="ml-2 font-bold whitespace-nowrap">Bình luận</h4>
            </el-badge>
          </div>
        </el-divider>
        <!-- $ Avtive tab - type comment -->
        <el-tabs v-model="activeComment" class="" @tab-click="changeTabComment">
          <el-tab-pane label="Website" name="system">
            <!-- $ Show insert this manga by ID -->
            <div>
              <el-tooltip :visible="guide.enterComment.state" class="" effect="dark"
                :content="guide.enterComment.content" placement="right">
                <el-input @focusin="guide.enterComment.state = true" @focusout="guide.enterComment.state = false"
                  class="border-slate-500" v-model="stateCommentPresent.content" :autosize="{ minRows: 3, maxRows: 4 }"
                  type="textarea" placeholder="Bình luận của bạn..." />
              </el-tooltip>
            </div>
            <!-- $ Sort comment this manga -->
            <div class="block text-right mt-4">
              <el-dropdown size="default" placement="bottom-end" trigger="click" split-button type="primary">
                Sắp xếp
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <CakeIcon class="w-4 h-4 mr-1" />
                      Mới nhất
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <ChatBubbleLeftIcon class="w-4 h-4 mr-1" />
                      Cũ nhất
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <ChatBubbleLeftRightIcon class="w-4 h-4 mr-1" />
                      Nổi bật
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <!-- $ Show comment this manga -->
            <div class="py-6 -my-6">
              <CommentDefault :key="comment" v-for="comment in comments" :comment="comment" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="Facebook" name="facebook" :lazy="true">
            <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
              data-width="800" data-numposts="5"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="Thống kê"></el-tab-pane>
        <el-tab-pane label="Đánh giá nổi bật"></el-tab-pane>
        <el-tab-pane label="Chi tiết"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, h } from 'vue';
import { useRouter } from 'vue-router';
import { SparklesIcon, ArrowPathIcon, StarIcon, WifiIcon, QuestionMarkCircleIcon, UserIcon, TagIcon, EyeIcon, ChatBubbleBottomCenterTextIcon, QueueListIcon, ArrowsPointingOutIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, CakeIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/solid'

import CommentDefault from '@/components/Comment/CommentDefault.vue';

const snipetType = {
  'author': { vnsub: 'Tác giả', icon: UserIcon },
  'status': { vnsub: 'Trạng thái', icon: WifiIcon },
  'genres': { vnsub: 'Thể loại', icon: TagIcon },
  'numViewer': { vnsub: 'Lượt xem', icon: EyeIcon },
  'rate': { vnsub: 'Đánh giá', icon: StarIcon },
  'none': { vnsub: 'none', icon: QuestionMarkCircleIcon },
}
const demoDesc = 'Một s.át thủ và một kẻ tống tình đã bắt đầu một cuộc chiến giành lấy hôn nhân khốc liệt nhất thế giới. Gero là một chàng trai trẻ đến từ một gia tộc sát thủ đã tồn tại hàng trăm năm. Là một người chưa bao giờ tới trường và sống một cuộc đời đen tối trong giới sát thủ, cậu tự cho mình là “vô vọng với phái nữ” và hôn nhân “không phải là thứ dành cho cậu”. Tuy nhiên, vào một ngày nọ, vì lo sợ rằng gia tộc sẽ không còn tồn tại nữa, người bà đã cảnh báo với Gero rằng, nếu cậu không kết hôn và sinh ra một người thừa kế, thì em gái của cậu sẽ làm “điều đó”. Nỗ lực đến cùng với trí thông minh của mình, Gero đã hỏi mục tiêu của mình, một kẻ tống tiền, để…';

const infoManga = reactive({
  author: 'Đang cập nhật',
  status: 'Đang tiến hành',
  genres: [
    'Action',
    'Fantasy',
    'Manhua',
    'Shounen',
    'Supernatural',
    'Truyện Màu'
  ],
  numViewer: null,
  rate: 3.4,
  totalRate: 4369,
});

const columnsChapter = [
  {
    key: `miru-chapter`,
    dataKey: `miru-chapter`,
    title: `Chapter`,
    width: 150,
  },
  {
    key: `miru-update`,
    dataKey: `miru-update`,
    title: `Cập nhật`,
    width: 150,
  },
  {
    key: `miru-viewer`,
    dataKey: `miru-viewer`,
    title: `Lượt xem`,
    width: 150,
  },
]

const datasChapter = [
  // foreach row
  {
    id: `chapter 1`,
    parentId: null,
    // foreach Column
    'miru-chapter': 'Chapter 1',
    'miru-update': '15 ngày trước',
    'miru-viewer': '3.768'
  },
  // foreach row
  {
    id: `chapter 2`,
    parentId: null,
    // foreach Column
    'miru-chapter': 'Chapter 2',
    'miru-update': '34 ngày trước',
    'miru-viewer': '1.728'
  },
]

const router = useRouter();
const rate = ref(infoManga.rate)
const expand = ref(null)
const guide = reactive({ enterComment: { state: false, content: 'Nhấn enter để đăng bình luận' } })
const comments = reactive(
  [
    {
      id: 1,
      name: 'Miru',
      content: '🌚🌚 con gái thì làm sao//nụ cười dần trở nên thiếu đạo đức//',
      avatar: 'https://st.ntcdntempv3.com/data/sites/1/useravatars/823733.jpg',
      present: 'Chapter 75',
      timeAt: '1 phút trước'
    },
    {
      id: 2,
      name: 'Navi',
      content: 'Ng ae, đừng, nó là con zai đấy',
      avatar: 'https://st.ntcdntempv3.com/data/sites/1/useravatars/843156.jpg',
      present: 'Chapter 12',
      timeAt: '12 giờ trước'
    },
    {
      id: 3,
      name: 'Đệ trác phàm',
      content: 'Ừ con gái:))',
      avatar: 'https://st.ntcdntempv3.com/data/sites/1/useravatars/886745.jpg',
      present: 'Chapter 56',
      timeAt: '12:35 22/10/2022'
    },
  ]
)
const totalComments = reactive({ system: 11, facebook: 22 }); // type value is one of ['null' or 'number']
const activeComment = ref('system') // enum of: ['system', 'facebook']
const expandStatus = reactive({ shouldExpand: false, isExpand: false })
const stateCommentPresent = reactive({ content: '' })

onMounted(() => {
  if (expand.value.clientHeight === expand.value.scrollHeight) {
    expandStatus.shouldExpand = false;
  } else {
    expandStatus.shouldExpand = true;
  }
})

const Row = ({ cells }) => {

  const vnode = h('div', { class: 'flex lock-top', onClick: handleClickChapter }, cells);

  return vnode;
}

const changeTabComment = (tab, event) => {

  console.log(tab, event)
}

const handleClickChapter = () => {
  router.push('/story');
}

const renderNumberComnents = (number) => {
  return number !== null ? number : ''
}

</script>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.lock-top {
  top: 0 !important;
  cursor: pointer;
}
</style>