/**
 * Data Cleaning & Normalization Library
 */

// Common email domain typos mapping
const DOMAIN_TYPO_MAP = {
    'gmai': 'gmail',
    'gmal': 'gmail',
    'gamil': 'gmail',
    'gmaill': 'gmail',
    'gmeil': 'gmail',
    'gml': 'gmail',
    'yaho': 'yahoo',
    'yahu': 'yahoo',
    'hotmai': 'hotmail',
    'hotmial': 'hotmail',
    'outlok': 'outlook',
    'outllook': 'outlook'
};

// Common top-level domain (TLD) typos mapping
const TLD_TYPO_MAP = {
    'con': 'com',
    'cơm': 'com',
    'côm': 'com',
    'comn': 'com',
    'cmo': 'com'
};

// Vietnamese carrier prefixes for 10-digit mobile numbers
const VIETNAMESE_CARRIERS = {
    'Viettel': ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039'],
    'VinaPhone': ['088', '091', '094', '081', '082', '083', '084', '085'],
    'MobiFone': ['089', '090', '093', '070', '076', '077', '078', '079'],
    'Vietnamobile': ['092', '056', '058'],
    'Gmobile': ['099', '059'],
    'Itelecom': ['087'],
    'Wintel': ['055']
};

/**
 * Remove Vietnamese diacritics (accents) and convert to base ASCII
 * @param {string} str 
 * @returns {string}
 */
function removeVietnameseDiacritics(str) {
    if (!str) return '';
    
    // Explicit mapping for tricky diacritics
    const map = {
        'à':'a','á':'a','ạ':'a','ả':'a','ã':'a','â':'a','ầ':'a','ấ':'a','ậ':'a','ẩ':'a','ẫ':'a','ă':'a','ằ':'a','ắ':'a','ặ':'a','ẳ':'a','ẵ':'a',
        'è':'e','é':'e','ẹ':'e','ẻ':'e','ẽ':'e','ê':'e','ề':'e','ế':'e','ệ':'e','ể':'e','ễ':'e',
        'ì':'i','í':'i','ị':'i','ỉ':'i','ĩ':'i',
        'ò':'o','ó':'o','ọ':'o','ỏ':'o','õ':'o','ô':'o','ồ':'o','ố':'o','ộ':'o','ổ':'o','ỗ':'o','ơ':'o','ờ':'o','ớ':'o','ợ':'o','ở':'o','ỡ':'o',
        'ù':'u','ú':'u','ụ':'u','ủ':'u','ũ':'u','ư':'u','ừ':'u','ứ':'u','ự':'u','ử':'u','ữ':'u',
        'ỳ':'y','ý':'y','ỵ':'y','ỷ':'y','ỹ':'y',
        'đ':'d',
        'À':'A','Á':'A','Ạ':'A','Ả':'A','Ã':'A','Â':'A','Ầ':'A','Ấ':'A','Ậ':'A','Ẩ':'A','Ẫ':'A','Ă':'A','Ằ':'A','Ắ':'A','Ặ':'A','Ẳ':'A','Ẵ':'A',
        'È':'E','É':'E','Ẹ':'E','Ẻ':'E','Ẽ':'E','Ê':'E','Ề':'E','Ế':'E','Ệ':'E','Ể':'E','Ễ':'E',
        'Ì':'I','Í':'I','Ị':'I','Ỉ':'I','Ĩ':'I',
        'Ò':'O','Ó':'O','Ọ':'O','Ỏ':'O','Õ':'O','Ô':'O','Ồ':'O','Ố':'O','Ộ':'O','Ổ':'O','Ỗ':'O','Ơ':'O','Ờ':'O','Ớ':'O','Ợ':'O','Ở':'O','Ỡ':'O',
        'Ù':'U','Ú':'U','Ụ':'U','Ủ':'U','Ũ':'U','Ư':'U','Ừ':'U','Ứ':'U','Ự':'U','Ử':'U','Ữ':'U',
        'Ỳ':'Y','Ý':'Y','Ỵ':'Y','Ỷ':'Y','Ỹ':'Y',
        'Đ':'D'
    };
    
    let res = str.split('').map(char => map[char] || char).join('');
    
    // Decompose diacritics and strip combining marks as fallback
    return res.normalize("NFD").replace(/[\u0300-\u036f\u031b]/g, "");
}

/**
 * Extracts emails from a string, allowing optional spaces around @ and .
 * @param {string} text 
 * @returns {Array} List of raw matches and their parts
 */
function extractEmails(text) {
    if (!text) return [];
    
    // Character class representing valid local parts (including Vietnamese letters)
    const localPartChars = 'a-zA-Z0-9._%+\\-àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ';
    // Character class representing valid domain names
    const domainPartChars = 'a-zA-Z0-9.\\-';
    
    const regex = new RegExp(
        `([${localPartChars}]+)\\s*@\\s*([${domainPartChars}]+)\\s*\\.\\s*(cơm|côm|con|com|co|vn|net|org|edu|gov|info|biz|us|uk|io|gmal|gmai)`,
        'gi'
    );
    
    const emails = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        emails.push({
            raw: match[0],
            local: match[1],
            domain: match[2],
            tld: match[3],
            index: match.index
        });
    }
    return emails;
}

/**
 * Extracts phone numbers from a string.
 * Looks for sequences starting with +84 or 0, containing digits, spaces, dots, dashes, parentheses.
 * @param {string} text 
 * @returns {Array} List of raw matches and digit strings
 */
function extractPhones(text) {
    if (!text) return [];
    
    // Match potential phone number patterns
    // Must start with 0, 84, or +84
    const regex = /(?:\+?84|0)[0-9\s.\-\(\)]{8,18}\b/g;
    
    const phones = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        const raw = match[0];
        // Strip out non-digit characters (except leading +)
        const digits = raw.replace(/\D/g, '');
        
        // A phone number must have between 9 and 12 digits to be realistic (covers landline & mobile)
        const totalDigits = digits.length;
        
        if (totalDigits >= 9 && totalDigits <= 12) {
            phones.push({
                raw: raw,
                digits: digits,
                index: match.index
            });
        }
    }
    return phones;
}

/**
 * Clean and normalize a single email address
 * @param {Object} emailObj Extracted email object containing {local, domain, tld}
 * @param {Object} options Toggle options for cleaning rules
 * @returns {Object} { cleanedEmail, changes: [] }
 */
function cleanEmail(emailObj, options = {}) {
    const defaultOptions = {
        removeSpaces: true,
        removeDiacritics: true,
        fixDomainTypos: true,
        lowercase: true
    };
    const opts = { ...defaultOptions, ...options };
    
    let local = emailObj.local;
    let domain = emailObj.domain;
    let tld = emailObj.tld;
    
    const changes = [];
    
    // 1. Remove spaces
    if (opts.removeSpaces) {
        const origLocal = local;
        const origDomain = domain;
        const origTld = tld;
        
        local = local.replace(/\s+/g, '');
        domain = domain.replace(/\s+/g, '');
        tld = tld.replace(/\s+/g, '');
        
        if (local !== origLocal || domain !== origDomain || tld !== origTld) {
            changes.push('Removed spaces inside email');
        }
    }
    
    // 2. Remove diacritics (especially in local part)
    if (opts.removeDiacritics) {
        const origLocal = local;
        local = removeVietnameseDiacritics(local);
        if (local !== origLocal) {
            changes.push(`Removed accents in username: "${origLocal}" → "${local}"`);
        }
        
        // Also remove diacritics in TLD (e.g. cơm → com)
        const origTld = tld;
        tld = removeVietnameseDiacritics(tld);
        if (tld !== origTld) {
            changes.push(`Removed accents in domain extension: "${origTld}" → "${tld}"`);
        }
    }
    
    // 3. Lowercase
    if (opts.lowercase) {
        local = local.toLowerCase();
        domain = domain.toLowerCase();
        tld = tld.toLowerCase();
    }
    
    // 4. Fix double dots in domain (e.g. gmail..com)
    if (domain.includes('..')) {
        domain = domain.replace(/\.+/g, '.');
        changes.push('Fixed duplicate dots in domain');
    }
    
    // Remove trailing dot from domain if it exists (captured due to regex)
    if (domain.endsWith('.')) {
        domain = domain.slice(0, -1);
        changes.push('Removed trailing dot from domain');
    }
    
    // 5. Fix common domain typos
    if (opts.fixDomainTypos) {
        // Domain name typo
        if (DOMAIN_TYPO_MAP[domain]) {
            const oldDomain = domain;
            domain = DOMAIN_TYPO_MAP[domain];
            changes.push(`Corrected domain: "${oldDomain}" → "${domain}"`);
        }
        
        // TLD typo
        if (TLD_TYPO_MAP[tld]) {
            const oldTld = tld;
            tld = TLD_TYPO_MAP[tld];
            changes.push(`Corrected domain extension: ".${oldTld}" → ".${tld}"`);
        }
    }
    
    const cleanedEmail = `${local}@${domain}.${tld}`;
    const isValid = validateEmailFormat(cleanedEmail);
    
    return {
        cleaned: cleanedEmail,
        changes: changes,
        isValid: isValid
    };
}

/**
 * Clean and normalize a single phone number
 * @param {Object} phoneObj Extracted phone object containing {raw, digits}
 * @param {Object} options Toggle options for cleaning rules
 * @returns {Object} { cleanedPhone, changes: [] }
 */
function cleanPhone(phoneObj, options = {}) {
    const defaultOptions = {
        standardizePrefix: true, // +84/84 -> 0
        validateCarrier: true
    };
    const opts = { ...defaultOptions, ...options };
    
    let digits = phoneObj.digits;
    const changes = [];
    
    // 1. Remove country prefix and convert to 0
    let cleaned = digits;
    if (opts.standardizePrefix) {
        if (digits.startsWith('84') && digits.length > 9) {
            cleaned = '0' + digits.slice(2);
            changes.push(`Standardized country code: "84..." → "0..."`);
        } else if (digits.startsWith('0084') && digits.length > 11) {
            cleaned = '0' + digits.slice(4);
            changes.push(`Standardized country code: "0084..." → "0..."`);
        }
    }
    
    // Validation: 10 digits for mobile, 11 digits for landlines starting with '02'
    const isLandline = cleaned.startsWith('02') && cleaned.length === 11;
    const lengthValid = cleaned.length === 10 || isLandline;
    const carrier = getVietnameseCarrier(cleaned);
    const hasValidCarrier = !!carrier;
    
    let isValid = lengthValid;
    if (opts.validateCarrier && lengthValid) {
        isValid = hasValidCarrier;
        if (!hasValidCarrier) {
            changes.push('Unknown carrier prefix');
        }
    }
    
    return {
        cleaned: cleaned,
        changes: changes,
        isValid: isValid,
        carrier: carrier || 'Other/Unknown'
    };
}

/**
 * Validates email format using standard regex
 * @param {string} email 
 * @returns {boolean}
 */
function validateEmailFormat(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

/**
 * Find carrier of a Vietnamese phone number
 * @param {string} phone 10-digit mobile or 11-digit landline starting with 0
 * @returns {string|null} Carrier name or null
 */
function getVietnameseCarrier(phone) {
    if (!phone) return null;
    
    // Landline check
    if (phone.startsWith('02') && phone.length === 11) {
        if (phone.startsWith('024')) return 'Cố định Hà Nội';
        if (phone.startsWith('028')) return 'Cố định TP.HCM';
        return 'Điện thoại cố định';
    }
    
    if (phone.length !== 10 || !phone.startsWith('0')) {
        return null;
    }
    const prefix3 = phone.slice(0, 3);
    for (const [carrier, prefixes] of Object.entries(VIETNAMESE_CARRIERS)) {
        if (prefixes.includes(prefix3)) {
            return carrier;
        }
    }
    return null;
}

/**
 * Parse standard CSV format supporting quotes, commas within quotes, and line breaks within quotes.
 * @param {string} text 
 * @returns {Array} List of rows (each row is an array of strings)
 */
function parseCSVText(text) {
    const lines = [];
    let currentRow = [];
    let currentCell = '';
    let insideQuote = false;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];
        
        if (char === '"') {
            if (insideQuote && nextChar === '"') {
                currentCell += '"';
                i++; // skip next quote
            } else {
                insideQuote = !insideQuote;
            }
        } else if (char === ',' && !insideQuote) {
            currentRow.push(currentCell.trim());
            currentCell = '';
        } else if ((char === '\r' || char === '\n') && !insideQuote) {
            if (char === '\r' && nextChar === '\n') {
                i++; // skip \n
            }
            currentRow.push(currentCell.trim());
            lines.push(currentRow);
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }
    
    if (currentCell || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        lines.push(currentRow);
    }
    
    // Filter out completely empty lines
    return lines.filter(row => row.length > 1 || (row.length === 1 && row[0] !== ''));
}

/**
 * Detect index of critical columns (STT, Name, Phone, Email, Date) in a CSV header
 * @param {Array} headers 
 * @returns {Object} Column index mappings
 */
function detectCSVColumns(headers) {
    let emailIdx = -1;
    let phoneIdx = -1;
    let nameIdx = -1;
    let dateIdx = -1;
    
    headers.forEach((h, idx) => {
        const headerLower = h.toLowerCase().trim();
        if (headerLower.includes('email') || headerLower.includes('mail')) {
            emailIdx = idx;
        } else if (headerLower.includes('sđt') || headerLower.includes('sdt') || headerLower.includes('phone') || headerLower.includes('điện thoại') || headerLower.includes('đt')) {
            phoneIdx = idx;
        } else if (headerLower.includes('họ tên') || headerLower.includes('họ và tên') || headerLower.includes('tên') || headerLower.includes('name') || headerLower.includes('khách hàng')) {
            nameIdx = idx;
        } else if (headerLower.includes('ngày') || headerLower.includes('date') || headerLower.includes('thời gian') || headerLower.includes('time')) {
            dateIdx = idx;
        }
    });
    
    // Standard default guesses if not detected
    if (emailIdx === -1) emailIdx = 3;
    if (phoneIdx === -1) phoneIdx = 2;
    if (nameIdx === -1) nameIdx = 1;
    if (dateIdx === -1) dateIdx = 5;
    
    return { emailIdx, phoneIdx, nameIdx, dateIdx };
}

/**
 * Smart row alignment if columns don't match header length due to unquoted commas in other cells
 * @param {Array} rowCells 
 * @param {Array} headers 
 * @param {number} emailColIdx 
 * @param {number} phoneColIdx 
 * @param {number} dateColIdx 
 * @returns {Array} Aligned row cells matching headers length
 */
function alignCSVRow(rowCells, headers, emailColIdx, phoneColIdx, dateColIdx) {
    if (rowCells.length === headers.length) {
        return rowCells;
    }
    
    if (rowCells.length < headers.length) {
        const aligned = [...rowCells];
        while (aligned.length < headers.length) {
            aligned.push('');
        }
        return aligned;
    }
    
    // rowCells.length > headers.length
    // Find email and date columns dynamically to locate where unquoted commas are
    let foundEmailIdx = rowCells.findIndex(cell => cell.includes('@'));
    let foundDateIdx = rowCells.findLastIndex(cell => 
        /^\d{1,4}[-./]\d{1,2}[-./]\d{1,4}$/.test(cell) ||
        /^\d{1,2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{1,4}$/i.test(cell)
    );
    
    // Fallback if index not found
    if (foundEmailIdx === -1) foundEmailIdx = emailColIdx;
    if (foundDateIdx === -1) foundDateIdx = rowCells.length - 1;
    
    const aligned = [];
    // 1. Copy elements before email (normally STT, Name, SĐT)
    for (let i = 0; i < foundEmailIdx; i++) {
        aligned.push(rowCells[i] || '');
    }
    // 2. Add email
    aligned.push(rowCells[foundEmailIdx] || '');
    
    // 3. Merge columns between email and date (these are normally unquoted currency/pricing amounts)
    const amountCells = [];
    for (let i = foundEmailIdx + 1; i < foundDateIdx; i++) {
        if (rowCells[i] !== undefined) amountCells.push(rowCells[i]);
    }
    aligned.push(amountCells.join(','));
    
    // 4. Add date
    aligned.push(rowCells[foundDateIdx] || '');
    
    // Pad or trim if it still deviates from header count
    while (aligned.length < headers.length) {
        aligned.push('');
    }
    if (aligned.length > headers.length) {
        aligned.length = headers.length;
    }
    
    return aligned;
}

/**
 * Parse structured or unstructured text to extract user comments and details
 * @param {string} text Raw text input
 * @returns {Array} List of records
 */
function parseTextToRecords(text) {
    if (!text) return [];
    
    const records = [];
    const normalizedText = text.replace(/\r\n/g, '\n');
    const lines = normalizedText.split('\n');
    
    // Formats supported:
    // 1. Facebook Comment Block
    // 2. CSV Table Format
    // 3. Raw Line-by-Line fallback
    
    const TIMESTAMP_REGEX = /^(vừa xong|vài giây trước|\d+\s*(phút|giờ|ngày|tuần|tháng|năm|m|h|d|w)\s*trước|\d+\s*(min|hour|day|week|month|year)s?\s*ago)/i;
    const REACTION_REGEX = /^(thích|phản hồi|like|reply)\b/i;
    
    let isCommentFormat = false;
    let isCSVFormat = false;
    
    // Perform quick scans to detect format
    for (let i = 1; i < Math.min(lines.length, 30); i++) {
        if (TIMESTAMP_REGEX.test(lines[i].trim())) {
            isCommentFormat = true;
            break;
        }
    }
    
    if (!isCommentFormat && lines.length > 0) {
        const firstLine = lines[0].trim();
        const commaCount = (firstLine.match(/,/g) || []).length;
        if (commaCount >= 2 && (
            firstLine.toLowerCase().includes('tên') || 
            firstLine.toLowerCase().includes('email') || 
            firstLine.toLowerCase().includes('sđt') || 
            firstLine.toLowerCase().includes('phone') || 
            firstLine.toLowerCase().includes('stt')
        )) {
            isCSVFormat = true;
        }
    }
    
    if (isCommentFormat) {
        // Facebook Comment Parser
        let i = 0;
        while (i < lines.length) {
            const line = lines[i].trim();
            if (!line) {
                i++;
                continue;
            }
            
            if (i + 1 < lines.length && TIMESTAMP_REGEX.test(lines[i + 1].trim())) {
                const name = line;
                const timestamp = lines[i + 1].trim();
                
                let bodyLines = [];
                let j = i + 2;
                while (j < lines.length) {
                    const currentLine = lines[j].trim();
                    if (REACTION_REGEX.test(currentLine)) {
                        j++;
                        break;
                    }
                    if (j + 1 < lines.length && TIMESTAMP_REGEX.test(lines[j + 1].trim())) {
                        break;
                    }
                    bodyLines.push(lines[j]);
                    j++;
                }
                
                const commentText = bodyLines.join('\n').trim();
                const extractedEmails = extractEmails(commentText);
                const extractedPhones = extractPhones(commentText);
                
                const maxCount = Math.max(extractedEmails.length, extractedPhones.length, 1);
                
                for (let k = 0; k < maxCount; k++) {
                    records.push({
                        id: 'rec_' + Math.random().toString(36).substr(2, 9),
                        name: name,
                        timestamp: timestamp,
                        originalComment: commentText,
                        
                        rawEmail: extractedEmails[k] ? extractedEmails[k].raw : '',
                        emailLocal: extractedEmails[k] ? extractedEmails[k].local : '',
                        emailDomain: extractedEmails[k] ? extractedEmails[k].domain : '',
                        emailTld: extractedEmails[k] ? extractedEmails[k].tld : '',
                        
                        rawPhone: extractedPhones[k] ? extractedPhones[k].raw : '',
                        phoneDigits: extractedPhones[k] ? extractedPhones[k].digits : '',
                        
                        cleanedEmail: '',
                        cleanedPhone: '',
                        emailStatus: 'No contact',
                        phoneStatus: 'No contact',
                        emailChanges: [],
                        phoneChanges: [],
                        carrier: ''
                    });
                }
                i = j;
            } else {
                i++;
            }
        }
    } else if (isCSVFormat) {
        // Smart CSV Table Parser
        const csvRows = parseCSVText(text);
        let headers = [];
        let startIndex = 0;
        
        if (csvRows.length > 0) {
            const firstRow = csvRows[0];
            const firstRowStr = firstRow.join(',').toLowerCase();
            if (firstRowStr.includes('tên') || firstRowStr.includes('email') || firstRowStr.includes('sđt') || firstRowStr.includes('stt') || firstRowStr.includes('phone')) {
                headers = firstRow;
                startIndex = 1;
            }
        }
        
        // Mock headers if not detected
        if (headers.length === 0 && csvRows.length > 0) {
            headers = csvRows[0].map((_, idx) => idx === 0 ? 'STT' : `Cột ${idx}`);
        }
        
        const { emailIdx, phoneIdx, nameIdx, dateIdx } = detectCSVColumns(headers);
        
        for (let i = startIndex; i < csvRows.length; i++) {
            const rowCells = csvRows[i];
            if (rowCells.length === 0 || (rowCells.length === 1 && rowCells[0] === '')) continue;
            
            const alignedRow = alignCSVRow(rowCells, headers, emailIdx, phoneIdx, dateIdx);
            
            // Extract raw fields using the column indices
            const rawEmailVal = alignedRow[emailIdx] || '';
            const rawPhoneVal = alignedRow[phoneIdx] || '';
            const nameVal = alignedRow[nameIdx] || `Hàng ${i + 1}`;
            const dateVal = alignedRow[dateIdx] || 'N/A';
            
            // Extract emails and phone numbers with fallbacks
            const extractedEmails = extractEmails(rawEmailVal);
            let email = '';
            let emailLocal = '';
            let emailDomain = '';
            let emailTld = '';
            if (extractedEmails.length > 0) {
                email = extractedEmails[0].raw;
                emailLocal = extractedEmails[0].local;
                emailDomain = extractedEmails[0].domain;
                emailTld = extractedEmails[0].tld;
            } else {
                // Search whole row for fallback
                const rowStr = alignedRow.join(',');
                const fallbackEmails = extractEmails(rowStr);
                if (fallbackEmails.length > 0) {
                    email = fallbackEmails[0].raw;
                    emailLocal = fallbackEmails[0].local;
                    emailDomain = fallbackEmails[0].domain;
                    emailTld = fallbackEmails[0].tld;
                }
            }
            
            const extractedPhones = extractPhones(rawPhoneVal);
            let phone = '';
            let phoneDigits = '';
            if (extractedPhones.length > 0) {
                phone = extractedPhones[0].raw;
                phoneDigits = extractedPhones[0].digits;
            } else {
                // Search whole row for fallback
                const rowStr = alignedRow.join(',');
                const fallbackPhones = extractPhones(rowStr);
                if (fallbackPhones.length > 0) {
                    phone = fallbackPhones[0].raw;
                    phoneDigits = fallbackPhones[0].digits;
                }
            }
            
            records.push({
                id: 'rec_' + Math.random().toString(36).substr(2, 9),
                isCSV: true,
                csvHeaders: headers,
                csvData: alignedRow,
                emailColIdx: emailIdx,
                phoneColIdx: phoneIdx,
                
                name: nameVal,
                timestamp: dateVal,
                originalComment: rowCells.join(','),
                
                rawEmail: email,
                emailLocal: emailLocal,
                emailDomain: emailDomain,
                emailTld: emailTld,
                
                rawPhone: phone,
                phoneDigits: phoneDigits,
                
                cleanedEmail: '',
                cleanedPhone: '',
                emailStatus: 'No contact',
                phoneStatus: 'No contact',
                emailChanges: [],
                phoneChanges: [],
                carrier: ''
            });
        }
    } else {
        // Fallback Line-by-Line Parser
        let lineIndex = 1;
        for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine) continue;
            
            const extractedEmails = extractEmails(trimmedLine);
            const extractedPhones = extractPhones(trimmedLine);
            
            if (extractedEmails.length > 0 || extractedPhones.length > 0) {
                const maxCount = Math.max(extractedEmails.length, extractedPhones.length);
                for (let k = 0; k < maxCount; k++) {
                    let guessedName = trimmedLine;
                    if (extractedEmails[k]) guessedName = guessedName.replace(extractedEmails[k].raw, '');
                    if (extractedPhones[k]) guessedName = guessedName.replace(extractedPhones[k].raw, '');
                    
                    guessedName = guessedName.replace(/[:\-–—,;]/g, '').trim();
                    if (!guessedName || guessedName.length > 30) {
                        guessedName = `User Line ${lineIndex}`;
                    }
                    
                    records.push({
                        id: 'rec_' + Math.random().toString(36).substr(2, 9),
                        name: guessedName,
                        timestamp: 'N/A',
                        originalComment: trimmedLine,
                        
                        rawEmail: extractedEmails[k] ? extractedEmails[k].raw : '',
                        emailLocal: extractedEmails[k] ? extractedEmails[k].local : '',
                        emailDomain: extractedEmails[k] ? extractedEmails[k].domain : '',
                        emailTld: extractedEmails[k] ? extractedEmails[k].tld : '',
                        
                        rawPhone: extractedPhones[k] ? extractedPhones[k].raw : '',
                        phoneDigits: extractedPhones[k] ? extractedPhones[k].digits : '',
                        
                        cleanedEmail: '',
                        cleanedPhone: '',
                        emailStatus: 'No contact',
                        phoneStatus: 'No contact',
                        emailChanges: [],
                        phoneChanges: [],
                        carrier: ''
                    });
                }
            } else {
                if (trimmedLine.length > 5) {
                    records.push({
                        id: 'rec_' + Math.random().toString(36).substr(2, 9),
                        name: trimmedLine.length < 30 ? trimmedLine : 'Unstructured Line',
                        timestamp: 'N/A',
                        originalComment: trimmedLine,
                        rawEmail: '',
                        emailLocal: '',
                        emailDomain: '',
                        emailTld: '',
                        rawPhone: '',
                        phoneDigits: '',
                        cleanedEmail: '',
                        cleanedPhone: '',
                        emailStatus: 'No contact',
                        phoneStatus: 'No contact',
                        emailChanges: [],
                        phoneChanges: [],
                        carrier: ''
                    });
                }
            }
            lineIndex++;
        }
    }
    
    return records;
}

/**
 * Process all records with the selected cleaning rules
 * @param {Array} records Records array
 * @param {Object} options Cleaning rules options
 * @returns {Array} Cleaned records
 */
function processRecords(records, options = {}) {
    const processed = records.map(rec => {
        const result = { ...rec };
        
        // Process Email
        if (rec.rawEmail) {
            const emailObj = {
                local: rec.emailLocal,
                domain: rec.emailDomain,
                tld: rec.emailTld
            };
            const cleaned = cleanEmail(emailObj, options);
            result.cleanedEmail = cleaned.cleaned;
            result.emailChanges = cleaned.changes;
            
            if (cleaned.isValid) {
                result.emailStatus = cleaned.changes.length > 0 ? 'Corrected' : 'Valid';
            } else {
                result.emailStatus = 'Invalid';
            }
        } else {
            result.cleanedEmail = '';
            result.emailStatus = 'No contact';
            result.emailChanges = [];
        }
        
        // Process Phone
        if (rec.rawPhone) {
            const phoneObj = {
                raw: rec.rawPhone,
                digits: rec.phoneDigits
            };
            const cleaned = cleanPhone(phoneObj, options);
            result.cleanedPhone = cleaned.cleaned;
            result.phoneChanges = cleaned.changes;
            result.carrier = cleaned.carrier;
            
            if (cleaned.isValid) {
                result.phoneStatus = cleaned.changes.length > 0 ? 'Corrected' : 'Valid';
            } else {
                result.phoneStatus = 'Invalid';
            }
        } else {
            result.cleanedPhone = '';
            result.phoneStatus = 'No contact';
            result.phoneChanges = [];
            result.carrier = '';
        }
        
        // Sync cleaned email/phone back into csvData if isCSV
        if (result.isCSV && result.csvData) {
            result.csvData = [...result.csvData];
            if (result.emailColIdx !== -1) {
                result.csvData[result.emailColIdx] = result.cleanedEmail || result.rawEmail || '';
            }
            if (result.phoneColIdx !== -1) {
                result.csvData[result.phoneColIdx] = result.cleanedPhone || result.rawPhone || '';
            }
        }
        
        return result;
    });

    // Check duplicates
    const emailSet = new Set();
    const phoneSet = new Set();
    const duplicateEmails = new Set();
    const duplicatePhones = new Set();

    processed.forEach(rec => {
        if (rec.cleanedEmail && rec.emailStatus !== 'Invalid') {
            const emailLower = rec.cleanedEmail.toLowerCase();
            if (emailSet.has(emailLower)) {
                duplicateEmails.add(emailLower);
            } else {
                emailSet.add(emailLower);
            }
        }
        
        if (rec.cleanedPhone && rec.phoneStatus !== 'Invalid') {
            if (phoneSet.has(rec.cleanedPhone)) {
                duplicatePhones.add(rec.cleanedPhone);
            } else {
                phoneSet.add(rec.cleanedPhone);
            }
        }
    });

    // Flag duplicate records
    return processed.map(rec => {
        if (rec.cleanedEmail && duplicateEmails.has(rec.cleanedEmail.toLowerCase())) {
            rec.isDuplicateEmail = true;
            // Avoid adding multiple duplicate warnings if re-cleaned
            if (!rec.emailChanges.includes('Cảnh báo email trùng lặp')) {
                rec.emailChanges.push('Cảnh báo email trùng lặp');
            }
        } else {
            rec.isDuplicateEmail = false;
        }
        
        if (rec.cleanedPhone && duplicatePhones.has(rec.cleanedPhone)) {
            rec.isDuplicatePhone = true;
            if (!rec.phoneChanges.includes('Cảnh báo SĐT trùng lặp')) {
                rec.phoneChanges.push('Cảnh báo SĐT trùng lặp');
            }
        } else {
            rec.isDuplicatePhone = false;
        }
        
        return rec;
    });
}

// Export functions for browser environment
if (typeof window !== 'undefined') {
    window.DataCleaner = {
        removeVietnameseDiacritics,
        extractEmails,
        extractPhones,
        cleanEmail,
        cleanPhone,
        parseTextToRecords,
        processRecords,
        parseCSVText,
        detectCSVColumns,
        alignCSVRow,
        DOMAIN_TYPO_MAP,
        TLD_TYPO_MAP,
        VIETNAMESE_CARRIERS
    };
}
