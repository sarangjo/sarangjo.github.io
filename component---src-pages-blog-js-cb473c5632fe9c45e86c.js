(self.webpackChunksarangjo_github_io=self.webpackChunksarangjo_github_io||[]).push([[7],{3898:function(t,e,n){"use strict";var r=n(7294),a=n(5444),i=n(5713);e.Z=function(t){var e=t.node,n=t.type,o=e.frontmatter.title||e.fields.slug;return r.createElement("div",{key:e.fields.slug},r.createElement("h3",{style:{marginBottom:(0,i.qZ)(1/4)}},r.createElement(a.Link,{style:{boxShadow:"none"},to:e.fields.slug},o)),r.createElement("small",null,e.frontmatter.date),function(t,e){return"theater"===e?r.createElement("p",null,t.frontmatter.source):r.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})}(e,n))}},6179:function(t,e,n){"use strict";var r=n(7294),a=n(5414),i=n(5444);function o(t){var e=t.description,n=t.lang,o=t.meta,s=t.keywords,c=t.title;return r.createElement(i.StaticQuery,{query:l,render:function(t){var i=e||t.site.siteMetadata.description;return r.createElement(a.Z,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)})}})}o.defaultProps={lang:"en",meta:[],keywords:[]},e.Z=o;var l="3128451518"},223:function(t,e,n){"use strict";n.r(e);var r=n(3552),a=n(7294),i=n(3898),o=n(2129),l=n(6179),s="Life Enthusiasm",c=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges;return a.createElement(o.Z,{location:this.props.location,title:s,description:"The world is a beautiful place.",helmetTitle:s+" | "+e},a.createElement(l.Z,{title:"Blog",keywords:["blog","gatsby","javascript","react"]}),n.map((function(t,e){var n=t.node;return a.createElement(i.Z,{key:e,node:n})})))},e}(a.Component);e.default=c}}]);
//# sourceMappingURL=component---src-pages-blog-js-cb473c5632fe9c45e86c.js.map