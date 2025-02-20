# 📱💻 Mobile at Desktop Responsive Design

Inaayos ko ang iba't ibang sukat ng screen para sa computer, laptop, at phone sa pamamagitan ng paggamit ng `@media queries` sa CSS. Ginawa ko itong responsive upang matiyak na maayos at magandang tingnan ang layout sa iba't ibang devices.

--- https://johnvel27.github.io/Resume-Website-For-Cathy-VA-PrelimExam-MultiDev/

## 📝 Summary of Improvements

### 1. **Inconsistent Units**
- Gumamit ng `vh` at `vw` imbes na `dvh` at `dvw` para sa mas predictable na layout.

### 2. **Overlapping Media Queries**
- Pagsamahin ang redundant media queries upang mas malinis ang CSS code.

### 3. **Fixed Positioning Issues**
- Iwasan ang `absolute positioning` at negative margins. Gumamit ng **flex** o **grid layout** para sa mas dynamic na design.

### 4. **Font Size Consistency**
- Iwasan ang madalas na paggamit ng `!important`. Ayusin ang CSS hierarchy para mas madaling i-manage ang styles.

### 5. **Mobile Navigation**
- Maglagay ng **hamburger menu** o **mobile navigation** imbes na nakatago ang `.navbar` at `.menu-toggle` sa mobile view.

### 6. **Optimal Image Scaling**
- Gamitin ang `object-fit: contain` upang maiwasan ang distortion ng images sa malalaking screen.

### 7. **Consistent Spacing**
- Gumamit ng `rem` o `em` sa padding at margin para sa mas responsive na spacing.

### 8. **Expanded Device Testing**
- Subukan ang design sa **tablet sizes (768px)** at iba pang breakpoints, hindi lamang sa 400px, 600px, at 1000px to 1800px.

### 9. **Fallbacks for Older Browsers**
- Magdagdag ng **fallback styles** para sa mas lumang browsers na maaaring walang support sa `flex`, `dvh`, at `dvw`.

### 10. **Mobile First Approach**
- Gamitin ang **Mobile First Approach**: Simulan sa **mobile styles** at magdagdag ng styles for larger screens gamit ang `min-width`.

---

## 🚀 **Future Plans:**
- [ ] Ayusin ang mobile navigation.
- [ ] Subukan ang design sa iba't ibang device sizes.
- [ ] Magdagdag ng fallback styles para sa older browsers.

