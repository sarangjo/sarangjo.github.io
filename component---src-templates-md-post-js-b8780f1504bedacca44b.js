(self.webpackChunksarangjo_github_io=self.webpackChunksarangjo_github_io||[]).push([[289],{6179:function(t,e,n){"use strict";var r=n(7294),i=n(7701),a=n(5444);function o(t){var e=t.description,n=t.lang,o=t.meta,s=t.keywords,c=t.title;return r.createElement(a.StaticQuery,{query:l,render:function(t){var a=e||t.site.siteMetadata.description;return r.createElement(i.ZP,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)})}})}o.defaultProps={lang:"en",meta:[],keywords:[]},e.Z=o;var l="3128451518"},974:function(t,e,n){"use strict";n.r(e);var r=n(3552),i=n(7294),a=n(5444),o=n(368),l=n(6179),s=n(5713),c=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t,e=this.props.data.markdownRemark,n=this.props.data.site.siteMetadata.title,r=e.excerpt,c=this.props.pageContext,p=c.previous,m=c.next;return(p||m)&&(t=i.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.createElement("li",null,p&&i.createElement(a.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),i.createElement("li",null,m&&i.createElement(a.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))),i.createElement(o.Z,{location:this.props.location,helmetTitle:e.frontmatter.title+" | "+n,title:e.frontmatter.title,helmetDescription:r,description:e.frontmatter.date+" - "+e.fields.readingTime.text},i.createElement(l.Z,{title:e.frontmatter.title,description:e.excerpt}),i.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.createElement("hr",{style:{marginBottom:(0,s.qZ)(1)}}),t)},e}(i.Component);e.default=c}}]);
//# sourceMappingURL=component---src-templates-md-post-js-b8780f1504bedacca44b.js.map