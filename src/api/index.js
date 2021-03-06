import service from "@/api/service"
import axios from "axios"
import { getToken, getBaseURL } from "../utils/auth"
import qs from 'qs'

// 获取标签列表
function getTags (options) {
  return service.get("/tag/list", { params: options })
}

// 创建标签
function createTag (options) {
  return service.post("/tag/create", options)
}

// 删除标签
function deleteTag (id) {
  return service.post(`/tag/delete/${id}`)
}

// 更改标签
function updataTag (id, options) {
  return service.post(`/tag/update/${id}`, options)
}

// 获取文章列表
function getArticles (options) {
  return service.get("/article/list", {
    params: options,
  })
}

// 新建文章
function createArticle (options) {
  options.tags = options.tags.join(',')
  return service.post("/article/create", options)
}

// 获取文章详情
function getArticleDetail (id) {
  return service.get("/article/detail/" + id)
}

// 更新文章数据
function updateArticle (id, options) {
  options.tags = options.tags.join(',')
  return service.post(`/article/update/${id}`, options)
}

// 更改文章状态
function updateArticleStatus (id, status) {
  return service.post(`/article/status/${id}`, {
    off: status
  })
}

// 删除文章
function delArticle (id) {
  return service.post("/article/delete/" + id)
}

// 获取角色列表
function getRoleList () {
  return service.get("/roles")
}

// 删除角色
function deleteRole (roleId) {
  return service.post("/role/delete", {
    roleId,
  })
}

// 添加角色
function createRole (options) {
  return service.post("/role", options)
}

// 权限列表
function getPermissions () {
  return service.get("/permission")
}

// 获取用户拥有的权限
function getRolePermiss (roleId) {
  return service.post("/role-permiss", {
    roleId,
  })
}

// 调整角色的权限
function modifyRolePermission (options) {
  return service.post("/role/permission", options)
}

// 获取文章数据
function articleCount () {
  return service.get("/article/count")
}

// 文章数量（图表数据）
function articleChartData (presetDate) {
  return service.get("/article/chart", {
    params: {
      preset_date: presetDate,
    },
  })
}

// 获取访问人数数据
function visitCount () {
  return service.get("/visit/count")
}

// 访问人数（图表数据）
function visitChartData (presetDate) {
  return service.get("/visit/chart", {
    params: {
      preset_date: presetDate,
    },
  })
}

// 用户更改密码
function updateUserPassword (old_pwd, new_pwd, new_pwd_confirm) {
  return service.post("/user/update/pwd", {
    old_pwd,
    new_pwd,
    new_pwd_confirm,
  })
}

// 用户修改用户名
function updateUserInfo (username) {
  return service.post("/user/update", {
    username,
  })
}

function updateUserAvatar (formdata) {
  return service.post("/upload/avatar", formdata)
}

// 获取后台用户列表
function getAdminList () {
  return service.get("/user/list")
}

// 获取图片
function getRolesList () {
  return service.get("/roles")
}

// 添加用户
function createUser (options) {
  return service.post("/user/create", options)
}

// 删除用户
function deleteUser (id) {
  return service.post(`/user/delete/${id}`)
}

// 调整用户角色
function modifyUserRole (options) {
  return service.post("/user/role", options)
}

// 富文本编辑器上传图片
function uploadEditorImg (options) {
  let token = getToken()
  return axios({
    url: getBaseURL() + "/upload/editor",
    method: "post",
    data: options,
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: "bearer " + token,
    },
  })
}

// 删除富文本编辑器图片
function deleteEditorImg (options) {
  return service.post("/upload/editor/delete", options)
}

// 获取草稿箱的文章
function getArticleDraftList () {
  return service.get("/article/list", {
    params: {
      type: 'draft'
    }
  })
}

// 新建草稿
function createArticleDraft (options) {
  return service.post("/article/create", {
    ...options,
    tags: options.tags.join(','),
    is_draft: true
  })
}

// 获取草稿详情
function getArticleDraftDetail (id) {
  return service.get(`/article/detail/${id}`)
}

// 更新草稿数据
function updateArticleDraft (id, options) {
  options.tags = options.tags.join(',')
  return service.post(`/article/update/${id}`, options)
}

// 删除草稿
function delArticleDraft (id) {
  return service.post(`/article/delete/${id}`)
}

// 获取网站信息
function getSiteInformation () {
  return service.get('/site/about')
}

// 更新网站信息
function updateSiteInformation (info) {
  return service.post('/site/about', {
    params: JSON.stringify(info)
  })
}

// 获取分类列表
function categoryList () {
  return service.get('/category/list')
}

// 修改分类信息
function updateCategory (id, name, cover) {
  const data = new FormData()
  data.append('name', name)
  data.append('cover', cover)
  return service.post(`/category/update/${id}`, data)
}

// 删除分类项
function deleteCategory (ids) {
  return service.post('/category/delete', {
    ids: ids.join(',')
  })
}

// 新建分类
function createCategory (name, cover) {
  const data = new FormData()
  data.append('name', name)
  data.append('cover', cover)
  return service.post('/category/create', data)
}

export {
  getTags,
  deleteTag,
  createTag,
  updataTag,
  getArticles,
  getArticleDetail,
  delArticle,
  getRoleList,
  deleteRole,
  createRole,
  getPermissions,
  getRolePermiss,
  modifyRolePermission,
  updateArticle,
  createArticle,
  articleCount,
  visitCount,
  visitChartData,
  articleChartData,
  deleteEditorImg,
  updateUserPassword,
  updateUserInfo,
  updateUserAvatar,
  getAdminList,
  getRolesList,
  createUser,
  deleteUser,
  modifyUserRole,
  uploadEditorImg,
  getArticleDraftList,
  createArticleDraft,
  getArticleDraftDetail,
  updateArticleDraft,
  delArticleDraft,
  updateArticleStatus,
  getSiteInformation,
  updateSiteInformation,
  categoryList,
  updateCategory,
  deleteCategory,
  createCategory
}
