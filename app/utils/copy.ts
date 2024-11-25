/**
 * Copies the given content to the clipboard.
 * @param {string} content
 * @returns {Promise<any>}
 */
const copyToClipboard = async (content: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Failed to copy to clipboard: ", err);
    }
  };
  