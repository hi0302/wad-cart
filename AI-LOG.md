# AI-LOG

## 2026-09-30 — cartTotal (IA#1)

Công cụ: GitHub Copilot (Agent mode) trong VS Code dùng cho việc implement.
Claude (chat) dùng để giải thích đề bài tập và đưa ra template cho các file rules, BRIEF.md, ci.yml, AI-LOG.md và script lint (package.json), review lại code.

Nội dung yêu cầu: cài đặt cartTotal trong src/cart.js và thêm tests vào test/cart.test.js, dùng file BRIEF.md làm prompt cho Copilot.

Copilot thêm: src/cart.js (~35 dòng, vòng lặp qua items, validation, Math.round) và 3 test: giỏ rỗng, giá tiền âm, số lượng không nguyên trong file test/cart.test.js (commit 5bce619). Test "the example from the slides" có sẵn từ starter.

Thay đổi/Từ chối code: Em không sửa và không loại bỏ gì trong code Copilot viết,
vì diff không có package mới, không toFixed, không try/catch.

Kiểm tra: Em đã đọc và check diff trước khi nhấn Keep, đảm bảo là file package.json không thêm dependencies, kiểm tra cart.js không có toFixed / try / catch, chạy thử nhiều lần npm test
và npm run lint để kiểm tra. 

Tự viết:
- Tests "qty 0 throws RangeError" và "shipping is charged just below the threshold" (commit 5bce619).
- Test "free shipping when subtotal equals the threshold" (commit 3a952a4).
- Chỉnh lại file rules, BRIEF.md, ci.yml và script lint từ template của Claude (commit 82dff1e).

Known gaps (Claude chỉ ra khi review code em đã viết xong):
- Món đồ mà không phải là mảng thì sẽ bị trả về 0 thay vì throw.
- Giá tiền mà null thì sẽ bị ép về 0 bởi hàm Number().
Em đã nhận ra và hiểu 2 điểm trên, em không sửa các điểm trên vì nó nằm ngoài phạm vi spec và trong yêu cầu đề cũng chỉ yêu cầu throw khi gặp giá tiền âm hay số lượng không nguyên. Em có nêu ở file SELF_ASSESSMENT_REPORT.md

Commit cuối chỉ thêm tài liệu nộp bài (BRIEF.md, AI-LOG.md, SELF_ASSESSMENT_REPORT.md), không đổi code.