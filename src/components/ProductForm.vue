<template>
  <div class="form-group">
    <input type="text" placeholder="Name" class="form-control" />

    <br />

    <label>Kategori Seçiniz</label>
    <select class="form-control">
      <option value>Seçiniz</option>
      <option value="1">Adana</option>
    </select>

    <br />

    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>


<script>
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {}
    };
  }
};
</script>

