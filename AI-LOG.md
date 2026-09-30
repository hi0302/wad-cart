# AI-LOG

## 2026-09-30 — cartTotal (IA#1)

Tool: GitHub Copilot (Agent mode) trong VS Code dùng cho việc implement.
Claude (chat) dùng để giải thích đề bài tập và đưa ra template cho các file rules, BRIEF.md, ci.yml, AI-LOG.md và script lint (package.json), review lại code.

Asked for: cài đặt cartTotal trong src/cart.js và thêm tests vào test/cart.test.js, dùng file BRIEF.md làm prompt cho Copilot.

Kept: src/cart.js (~35 dòng, vòng lặp qua items, validation, Math.round) và 3 test: giỏ rỗng, giá tiền âm, số lượng không nguyên trong file test/cart.test.js (commit 5bce619). Test "the example from the slides" có sẵn từ starter.

Changed: không có. Em đọc thấy code đúng spec nên không rewrite.

Rejected: không có, vì Copilot không thêm package, không dùng toFixed, không nuốt lỗi bằng try/catch.

By hand:
- Tests "qty 0 throws RangeError" và "shipping is charged just below the threshold" (commit 5bce619).
- Test "free shipping when subtotal equals the threshold" (commit 3a952a4).
- Chỉnh lại file rules, BRIEF.md, ci.yml và script lint từ template của Claude (commit 82dff1e).

Ghi chú thêm (Claude chỉ ra khi review code em đã viết xong):
- Món đồ mà không phải là mảng thì sẽ bị trả về 0 thay vì throw.
- Giá tiền mà null thì sẽ bị ép về 0 bởi hàm Number().
Em đã nhận ra và hiểu 2 điểm trên, em không sửa các điểm trên vì nó nằm ngoài phạm vi spec và trong yêu cầu đề cũng chỉ yêu cầu throw khi gặp giá tiền âm hay số lượng không nguyên. Em có nêu ở file SELF_ASSESSMENT_REPORT.md

Commit cuối chỉ thêm tài liệu nộp bài (AI-LOG.md, SELF_ASSESSMENT_REPORT.md), không đổi code.